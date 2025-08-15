const MultiSiteAutomation = require('./multi_site_automation');
const express = require('express');
const fs = require('fs').promises;

const targetUsername = 'comedor_di_primas';
const followerCount = 500;
const accountsFilePath = './accounts.txt'; // Caminho para o arquivo de contas

async function readAccounts(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data.split('\n').filter(line => line.trim() !== '').map(line => {
            const [username, password] = line.trim().split(' ');
            return { username, password };
        });
    } catch (error) {
        console.error(`Erro ao ler o arquivo de contas: ${error.message}`);
        return [];
    }
}

async function main() {
    console.log("=== AUTOMAÇÃO MULTI-SITE DE SEGUIDORES INSTAGRAM ===");
    console.log("Configuração:");
    console.log(`- Usuário alvo: ${targetUsername}`);
    console.log(`- Seguidores por site: ${followerCount}`);
    console.log(`- Atraso entre sites: 3 segundos`);
    console.log(`- Intervalo entre ciclos de sites: 1 hora e 30 minutos`);
    console.log(`- Intervalo entre ciclos de contas: 1 minuto`); // Novo intervalo
    console.log("\nIniciando em 5 segundos...");
    
    await new Promise(resolve => setTimeout(resolve, 5000));

    const accounts = await readAccounts(accountsFilePath);
    if (accounts.length === 0) {
        console.error("Nenhuma conta encontrada no arquivo de contas. Encerrando.");
        process.exit(1);
    }

    let currentAccountIndex = 0;

    // Iniciar o servidor Express para manter a aplicação viva
    const app = express();
    const port = process.env.PORT || 3000; // Render fornece a porta via variável de ambiente

    app.get('/', (req, res) => {
        res.send('Automação Instagram está rodando!');
    });

    app.get('/health', (req, res) => {
        res.status(200).send('OK');
    });

    app.listen(port, '0.0.0.0', () => {
        console.log(`Servidor Express escutando em http://0.0.0.0:${port}`);
    });

    // Loop principal para alternar entre as contas
    while (true) {
        const currentAccount = accounts[currentAccountIndex];
        console.log(`\n🔄 INICIANDO CICLO COM A CONTA: ${currentAccount.username}`);

        const automation = new MultiSiteAutomation(currentAccount.username, currentAccount.password);

        try {
            await automation.initBrowser();
            await automation.startInfiniteLoop(targetUsername, followerCount);
        } catch (error) {
            console.error(`Erro durante a automação com a conta ${currentAccount.username}:`, error);
        } finally {
            await automation.closeBrowser();
        }

        currentAccountIndex = (currentAccountIndex + 1) % accounts.length;

        if (currentAccountIndex === 0) {
            console.log(`Todas as contas foram processadas. Aguardando 1 hora para reiniciar o ciclo de contas.`);
            await new Promise(resolve => setTimeout(resolve, 60 * 60 * 1000)); // 1 hora
        } else {
            console.log(`Aguardando 1 minuto antes de mudar para a próxima conta.`);
            await new Promise(resolve => setTimeout(resolve, 60 * 1000)); // 1 minuto
        }
    }
}

// Tratamento de sinais para encerramento gracioso
process.on('SIGINT', async () => {
    console.log("\n\n⚠️  Recebido sinal de interrupção (Ctrl+C)");
    console.log("Encerrando automação...");
    
    try {
        // Não é necessário fechar o navegador aqui, pois ele é fechado no loop principal
        console.log("✅ Automação encerrada");
    } catch (error) {
        console.error("❌ Erro ao encerrar automação:", error.message);
    }
    
    console.log("👋 Automação encerrada");
    process.exit(0);
});

process.on('SIGTERM', async () => {
    console.log("\n\n⚠️  Recebido sinal de término");
    console.log("Encerrando automação...");
    
    try {
        // Não é necessário fechar o navegador aqui, pois ele é fechado no loop principal
        console.log("✅ Automação encerrada");
    } catch (error) {
        console.error("❌ Erro ao encerrar automação:", error.message);
    }
    
    console.log("👋 Automação encerrada");
    process.exit(0);
});

// Executar
main().catch(error => {
    console.error("Erro fatal:", error);
    process.exit(1);
});


