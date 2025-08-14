const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");

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
        // Configuração para ambiente de produção (Render)
        const isProduction = process.env.NODE_ENV === 'production' || process.env.RENDER;
        
        let browserOptions;
        
        if (isProduction) {
            // Configuração para Render com @sparticuz/chromium
            browserOptions = {
                args: [
                    ...chromium.args,
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-accelerated-2d-canvas',
                    '--no-first-run',
                    '--no-zygote',
                    '--single-process',
                    '--disable-gpu'
                ],
                defaultViewport: chromium.defaultViewport,
                executablePath: await chromium.executablePath(),
                headless: chromium.headless,
                ignoreHTTPSErrors: true,
            };
        } else {
            // Configuração para desenvolvimento local
            browserOptions = {
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            };
        }

        this.browser = await puppeteer.launch(browserOptions);
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
                console.log(`[${siteConfig.name}] Falha no envio de seguidores...`);
                return false;
            }

            console.log(`[${siteConfig.name}] ✅ Site processado com sucesso!`);
            return true;

        } catch (error) {
            console.error(`[${siteConfig.name}] Erro geral no processamento:`, error.message);
            return false;
        }
    }

    async runCycle(targetUsername, followerCount) {
        console.log(`\\n🚀 INICIANDO NOVO CICLO - ${new Date().toLocaleString()}`);
        console.log(`📊 Processando ${sitesConfig.length} sites...`);
        
        let successCount = 0;
        let failureCount = 0;

        for (let i = 0; i < sitesConfig.length; i++) {
            const siteConfig = sitesConfig[i];
            
            console.log(`\\n📍 Site ${i + 1}/${sitesConfig.length}: ${siteConfig.name}`);
            
            const success = await this.processSite(siteConfig, targetUsername, followerCount);
            
            if (success) {
                successCount++;
                console.log(`✅ Sucesso! (${successCount}/${i + 1})`);
            } else {
                failureCount++;
                console.log(`❌ Falha! (${failureCount}/${i + 1})`);
            }

            // Aguardar 3 segundos entre sites (exceto no último)
            if (i < sitesConfig.length - 1) {
                console.log(`⏳ Aguardando 3 segundos antes do próximo site...`);
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        }

        console.log(`\\n📈 RESUMO DO CICLO:`);
        console.log(`✅ Sucessos: ${successCount}/${sitesConfig.length}`);
        console.log(`❌ Falhas: ${failureCount}/${sitesConfig.length}`);
        console.log(`📊 Taxa de sucesso: ${((successCount / sitesConfig.length) * 100).toFixed(1)}%`);
        
        return { successCount, failureCount };
    }

    async startInfiniteLoop(targetUsername, followerCount) {
        console.log(`\\n🔄 INICIANDO LOOP INFINITO`);
        console.log(`🎯 Usuário alvo: ${targetUsername}`);
        console.log(`👥 Seguidores por site: ${followerCount}`);
        console.log(`⏰ Intervalo entre ciclos: 1 hora e 30 minutos`);
        
        let cycleNumber = 1;

        while (true) {
            try {
                console.log(`\\n\\n🔥 ===== CICLO ${cycleNumber} ===== 🔥`);
                
                // Inicializar navegador para cada ciclo
                await this.initBrowser();
                
                // Executar ciclo
                const results = await this.runCycle(targetUsername, followerCount);
                
                // Fechar navegador
                await this.closeBrowser();
                
                console.log(`\\n🏁 CICLO ${cycleNumber} CONCLUÍDO!`);
                console.log(`⏰ Próximo ciclo em 1 hora e 30 minutos...`);
                console.log(`🕐 Próximo início previsto: ${new Date(Date.now() + 90 * 60 * 1000).toLocaleString()}`);
                
                // Aguardar 1 hora e 30 minutos (90 minutos = 5.400.000 ms)
                await new Promise(resolve => setTimeout(resolve, 90 * 60 * 1000));
                
                cycleNumber++;
                
            } catch (error) {
                console.error(`\\n💥 ERRO CRÍTICO NO CICLO ${cycleNumber}:`, error);
                
                // Tentar fechar navegador em caso de erro
                try {
                    await this.closeBrowser();
                } catch (closeError) {
                    console.error("Erro ao fechar navegador:", closeError.message);
                }
                
                console.log(`\\n🔄 Tentando novamente em 5 minutos...`);
                await new Promise(resolve => setTimeout(resolve, 5 * 60 * 1000));
            }
        }
    }
}

module.exports = MultiSiteAutomation;

