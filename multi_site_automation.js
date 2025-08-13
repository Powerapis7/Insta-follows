const puppeteer = require("puppeteer");

// Configuração dos sites
const sitesConfig = [
    {
        name: "instamoda",
        baseUrl: "https://instamoda.org",
        loginUrl: "https://instamoda.org/login",
        sendFollowerUrl: "https://instamoda.org/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "fastfollow",
        baseUrl: "https://fastfollow.in",
        loginUrl: "https://fastfollow.in/member",
        sendFollowerUrl: "https://fastfollow.in/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "takipcikrali",
        baseUrl: "https://takipcikrali.com",
        loginUrl: "https://takipcikrali.com/login",
        sendFollowerUrl: "https://takipcikrali.com/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "birtakipci",
        baseUrl: "https://birtakipci.com",
        loginUrl: "https://birtakipci.com/member",
        sendFollowerUrl: "https://birtakipci.com/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "takipcitime",
        baseUrl: "https://takipcitime.com",
        loginUrl: "https://takipcitime.com/login",
        sendFollowerUrl: "https://takipcitime.com/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "medyahizmeti",
        baseUrl: "https://medyahizmeti.com",
        loginUrl: "https://medyahizmeti.com/login",
        sendFollowerUrl: "https://medyahizmeti.com/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "mixtakip",
        baseUrl: "https://mixtakip.com",
        loginUrl: "https://mixtakip.com/login",
        sendFollowerUrl: "https://mixtakip.com/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "takipciking_net",
        baseUrl: "https://takipciking.net",
        loginUrl: "https://takipciking.net/login",
        sendFollowerUrl: "https://takipciking.net/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "takipcigir",
        baseUrl: "https://takipcigir.com",
        loginUrl: "https://takipcigir.com/login",
        sendFollowerUrl: "https://takipcigir.com/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "canlitakipci",
        baseUrl: "https://canlitakipci.com",
        loginUrl: "https://canlitakipci.com/login",
        sendFollowerUrl: "https://canlitakipci.com/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "takipcimax",
        baseUrl: "https://takipcimax.com",
        loginUrl: "https://takipcimax.com/login",
        sendFollowerUrl: "https://takipcimax.com/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "takipciking_com",
        baseUrl: "https://www.takipciking.com",
        loginUrl: "https://www.takipciking.com/login",
        sendFollowerUrl: "https://www.takipciking.com/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "takipcizen",
        baseUrl: "https://takipcizen.com",
        loginUrl: "https://takipcizen.com/login",
        sendFollowerUrl: "https://takipcizen.com/tools/send-follower/6887835530",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "takipcivar",
        baseUrl: "https://takipcivar.net",
        loginUrl: "https://takipcivar.net/login",
        sendFollowerUrl: "https://takipcivar.net/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "hepsitakipci",
        baseUrl: "https://www.hepsitakipci.com",
        loginUrl: "https://www.hepsitakipci.com/login",
        sendFollowerUrl: "https://www.hepsitakipci.com/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    }
];

class MultiSiteAutomation {
    constructor(username, password) {
        this.credentials = {
            username: username,
            password: password
        };
        this.browser = null;
        this.page = null;
        this.currentSiteIndex = 0;
    }

    async initBrowser() {
        // Configuração específica para o ambiente Render
        const launchOptions = { 
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
        };

        // Se estivermos no Render, especificar o caminho do Chrome explicitamente
        if (process.env.RENDER) {
            const chromePath = '/opt/render/.cache/puppeteer/chrome/linux-139.0.7258.66/chrome-linux64/chrome';
            launchOptions.executablePath = chromePath;
            console.log(`Usando Chrome do Render em: ${chromePath}`);
        }

        this.browser = await puppeteer.launch(launchOptions);
        this.page = await this.browser.newPage();
        await this.page.setViewport({ width: 1366, height: 768 });
    }

    async closeBrowser() {
        if (this.browser) {
            await this.browser.close();
        }
    }

    async login(siteConfig) {
        try {
            console.log(`[${siteConfig.name}] Iniciando processo de login...`);
            await this.page.goto(siteConfig.loginUrl, { waitUntil: "networkidle2", timeout: 30000 });

            await this.page.waitForSelector(siteConfig.selectors.username, { timeout: 10000 });
            await this.page.type(siteConfig.selectors.username, this.credentials.username);
            await this.page.type(siteConfig.selectors.password, this.credentials.password);

            console.log(`[${siteConfig.name}] Credenciais preenchidas, clicando em login...`);
            
            const loginButton = await this.page.evaluateHandle((buttonText) => {
                const buttons = Array.from(document.querySelectorAll("button"));
                return buttons.find(button => button.textContent.includes(buttonText));
            }, siteConfig.loginButtonText);

            if (!loginButton) {
                throw new Error("Botão de login não encontrado.");
            }

            await Promise.all([
                this.page.waitForNavigation({ waitUntil: "networkidle2", timeout: 30000 }).catch(() => {}),
                loginButton.click()
            ]);

            console.log(`[${siteConfig.name}] Login realizado com sucesso!`);
            return true;

        } catch (error) {
            console.error(`[${siteConfig.name}] Erro durante o login:`, error.message);
            return false;
        }
    }

    async sendFollowers(siteConfig, targetUsername, followerCount = 500) {
        try {
            console.log(`[${siteConfig.name}] Iniciando envio de ${followerCount} seguidores para ${targetUsername}...`);
            await this.page.goto(siteConfig.sendFollowerUrl, { waitUntil: "networkidle2", timeout: 30000 });

            // Aguardar e preencher o campo de usuário alvo
            await this.page.waitForSelector(siteConfig.selectors.targetUsername, { timeout: 10000 });
            await this.page.type(siteConfig.selectors.targetUsername, targetUsername);

            console.log(`[${siteConfig.name}] Procurando usuário: ${targetUsername}`);
            
            // Encontrar o botão "Kullanıcıyı Bul"
            const findUserButton = await this.page.evaluateHandle((buttonText) => {
                const buttons = Array.from(document.querySelectorAll("button"));
                return buttons.find(button => button.textContent.includes(buttonText));
            }, siteConfig.findUserButtonText);

            if (findUserButton) {
                await Promise.all([
                    this.page.waitForNavigation({ waitUntil: "networkidle2", timeout: 30000 }).catch(() => {}),
                    findUserButton.click()
                ]);
            }

            // Preencher quantidade de seguidores
            await this.page.waitForSelector(siteConfig.selectors.followerCount, { timeout: 10000 });
            await this.page.evaluate((count, selector) => {
                const input = document.querySelector(selector);
                if (input) {
                    input.value = count.toString();
                    input.dispatchEvent(new Event("input", { bubbles: true }));
                }
            }, followerCount, siteConfig.selectors.followerCount);

            console.log(`[${siteConfig.name}] Quantidade definida: ${followerCount} seguidores`);

            // Encontrar e clicar no botão Start
            let startButton = await this.page.evaluateHandle((buttonTexts) => {
                const buttons = Array.from(document.querySelectorAll("button"));
                return buttons.find(btn => 
                    buttonTexts.some(text => btn.textContent.includes(text)) ||
                    (btn.getAttribute("onclick") && btn.getAttribute("onclick").includes("send"))
                );
            }, siteConfig.startButtonText);

            if (!startButton) {
                throw new Error("Botão Start não encontrado");
            }

            console.log(`[${siteConfig.name}] Iniciando envio de seguidores...`);
            await startButton.click();

            // Aguardar apenas 3 segundos conforme solicitado
            await new Promise(resolve => setTimeout(resolve, 3000));

            console.log(`[${siteConfig.name}] Envio iniciado! Aguardando 3 segundos antes de prosseguir...`);
            return true;

        } catch (error) {
            console.error(`[${siteConfig.name}] Erro durante o envio de seguidores:`, error.message);
            return false;
        }
    }

    async processSite(siteConfig, targetUsername, followerCount) {
        try {
            console.log(`\\n=== PROCESSANDO SITE: ${siteConfig.name.toUpperCase()} ===`);
            
            const loginSuccess = await this.login(siteConfig);
            if (!loginSuccess) {
                console.log(`[${siteConfig.name}] Falha no login, pulando para o próximo site...`);
                return false;
            }

            const sendSuccess = await this.sendFollowers(siteConfig, targetUsername, followerCount);
            if (!sendSuccess) {
                console.log(`[${siteConfig.name}] Falha no envio, mas continuando...`);
            }

            console.log(`[${siteConfig.name}] Processamento concluído!`);
            return true;

        } catch (error) {
            console.error(`[${siteConfig.name}] Erro geral:`, error.message);
            return false;
        }
    }

    async executeFullCycle(targetUsername, followerCount = 500) {
        const startTime = Date.now();
        console.log("\\n=== INICIANDO CICLO COMPLETO DE AUTOMAÇÃO MULTI-SITE ===");
        console.log(`Alvo: ${targetUsername}`);
        console.log(`Seguidores por site: ${followerCount}`);
        console.log(`Total de sites: ${sitesConfig.length}`);
        console.log(`Horário de início: ${new Date().toLocaleString()}`);

        await this.initBrowser();

        let successCount = 0;
        let failCount = 0;

        for (let i = 0; i < sitesConfig.length; i++) {
            const siteConfig = sitesConfig[i];
            
            try {
                const success = await this.processSite(siteConfig, targetUsername, followerCount);
                if (success) {
                    successCount++;
                } else {
                    failCount++;
                }
            } catch (error) {
                console.error(`Erro crítico no site ${siteConfig.name}:`, error.message);
                failCount++;
            }

            // Aguardar 3 segundos entre sites (exceto no último)
            if (i < sitesConfig.length - 1) {
                console.log(`\\nAguardando 3 segundos antes do próximo site...`);
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        }

        await this.closeBrowser();

        const endTime = Date.now();
        const duration = Math.round((endTime - startTime) / 1000);

        console.log("\\n=== CICLO COMPLETO FINALIZADO ===");
        console.log(`Sites processados com sucesso: ${successCount}`);
        console.log(`Sites com falha: ${failCount}`);
        console.log(`Duração total: ${duration} segundos`);
        console.log(`Horário de término: ${new Date().toLocaleString()}`);

        return { successCount, failCount, duration };
    }

    async startInfiniteLoop(targetUsername, followerCount = 500) {
        console.log("\\n=== INICIANDO LOOP INFINITO DE AUTOMAÇÃO ===");
        console.log("Configuração:");
        console.log(`- Usuário alvo: ${targetUsername}`);
        console.log(`- Seguidores por site: ${followerCount}`);
        console.log(`- Intervalo entre ciclos: 1 hora e 30 minutos (5400 segundos)`);
        console.log(`- Sites por ciclo: ${sitesConfig.length}`);

        let cycleCount = 0;

        while (true) {
            cycleCount++;
            console.log(`\\n\\n🔄 INICIANDO CICLO #${cycleCount} - ${new Date().toLocaleString()}`);

            try {
                const result = await this.executeFullCycle(targetUsername, followerCount);
                
                console.log(`\\n✅ CICLO #${cycleCount} CONCLUÍDO:`);
                console.log(`   - Sucessos: ${result.successCount}/${sitesConfig.length}`);
                console.log(`   - Falhas: ${result.failCount}/${sitesConfig.length}`);
                console.log(`   - Duração: ${result.duration}s`);

            } catch (error) {
                console.error(`\\n❌ ERRO NO CICLO #${cycleCount}:`, error.message);
            }

            // Aguardar 1 hora e 30 minutos (5400 segundos) antes do próximo ciclo
            const waitTime = 5400; // 1.5 horas em segundos
            console.log(`\\n⏰ Aguardando ${waitTime/60} minutos até o próximo ciclo...`);
            console.log(`   Próximo ciclo será às: ${new Date(Date.now() + waitTime * 1000).toLocaleString()}`);
            
            await new Promise(resolve => setTimeout(resolve, waitTime * 1000));
        }
    }
}

module.exports = MultiSiteAutomation;

