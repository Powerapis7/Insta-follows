const MultiSiteAutomation = require('./multi_site_automation');
const express = require('express');

// Configurações do usuário
const username = 'Luisa_sfd13';
const password = 'LUANLEVY17';
const targetUsername = 'comedor_di_primas';
const followerCount = 500;

// Criar instância da automação
const automation = new MultiSiteAutomation(username, password);

// Função principal
async function main() {
    console.log("=== AUTOMAÇÃO MULTI-SITE DE SEGUIDORES INSTAGRAM ===");
    console.log("Configuração:");
    console.log(`- Conta de login: ${username}`);
    console.log(`- Usuário alvo: ${targetUsername}`);
    console.log(`- Seguidores por site: ${followerCount}`);
    console.log(`- Total de sites: 15`);
    console.log(`- Atraso entre sites: 3 segundos`);
    console.log(`- Intervalo entre ciclos: 1 hora e 30 minutos`);
    console.log("\nIniciando em 5 segundos...");
    
    await new Promise(resolve => setTimeout(resolve, 5000));

    try {
        // Iniciar o loop infinito da automação em segundo plano
        automation.startInfiniteLoop(targetUsername, followerCount).catch(error => {
            console.error("Erro crítico na automação:", error);
            process.exit(1);
        });

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

    } catch (error) {
        console.error("Erro fatal ao iniciar automação ou servidor:", error);
        process.exit(1);
    }
}

// Tratamento de sinais para encerramento gracioso
process.on('SIGINT', async () => {
    console.log("\n\n⚠️  Recebido sinal de interrupção (Ctrl+C)");
    console.log("Encerrando automação...");
    
    try {
        await automation.closeBrowser();
        console.log("✅ Navegador fechado com sucesso");
    } catch (error) {
        console.error("❌ Erro ao fechar navegador:", error.message);
    }
    
    console.log("👋 Automação encerrada");
    process.exit(0);
});

process.on('SIGTERM', async () => {
    console.log("\n\n⚠️  Recebido sinal de término");
    console.log("Encerrando automação...");
    
    try {
        await automation.closeBrowser();
        console.log("✅ Navegador fechado com sucesso");
    } catch (error) {
        console.error("❌ Erro ao fechar navegador:", error.message);
    }
    
    console.log("👋 Automação encerrada");
    process.exit(0);
});

// Executar
main().catch(error => {
    console.error("Erro fatal:", error);
    process.exit(1);
});


