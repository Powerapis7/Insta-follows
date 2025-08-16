const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");

// Configuração dos sites
const allSitesConfig = [
    {
        name: "instamoda",
        baseUrl: "https://instamoda.org",
        loginUrl: "https://instamoda.org/login",
        sendFollowerUrl: "https://instamoda.org/tools/send-follower",
        selectors: {
            username: "input[placeholder="Kullanıcı adı"]",
            password: "input[placeholder="Şifre"]",
            loginButton: "button",
            targetUsername: "input[placeholder="fatihh"]",
            findUserButton: "button",
            followerCount: "input[placeholder="50"]",
            startButton: "button",
            credit: "a[href="/tools/send-follower"]"
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
            username: "input[placeholder="Kullanıcı adı"]",
            password: "input[placeholder="Şifre"]",
            loginButton: "button",
            targetUsername: "input[placeholder="fatihh"]",
            findUserButton: "button",
            followerCount: "input[placeholder="50"]",
            startButton: "button",
            credit: "a[href="/tools/send-follower"]"
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
            username: "input[placeholder="Kullanıcı adı"]",
            password: "input[placeholder="Şifre"]",
            loginButton: "button",
            targetUsername: "input[placeholder="fatihh"]",
            findUserButton: "button",
            followerCount: "input[placeholder="50"]",
            startButton: "button",
            credit: "a[href="/tools/send-follower"]"
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
            username: "input[placeholder="Kullanıcı adı"]",
            password: "input[placeholder="Şifre"]",
            loginButton: "button",
            targetUsername: "input[placeholder="fatihh"]",
            findUserButton: "button",
            followerCount: "input[placeholder="50"]",
            startButton: "button",
            credit: "a[href="/tools/send-follower"]"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "medyahizmeti",
        baseUrl: "https://medyahizmeti.com",
        loginUrl: "https://medyahizmeti.com/member",
        sendFollowerUrl: "https://medyahizmeti.com/tools/send-follower",
        selectors: {
            username: "input[placeholder="Kullanıcı adı"]",
            password: "input[placeholder="Şifre"]",
            loginButton: "button",
            targetUsername: "input[placeholder="fatihh"]",
            findUserButton: "button",
            followerCount: "input[placeholder="50"]",
            startButton: "button",
            credit: "a[href="/tools/send-follower"]"
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
            username: "input[placeholder="Kullanıcı adı"]",
            password: "input[placeholder="Şifre"]",
            loginButton: "button",
            targetUsername: "input[placeholder="fatihh"]",
            findUserButton: "button",
            followerCount: "input[placeholder="50"]",
            startButton: "button",
            credit: "a[href="/tools/send-follower"]"
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
            username: "input[placeholder="Kullanıcı adı"]",
            password: "input[placeholder="Şifre"]",
            loginButton: "button",
            targetUsername: "input[placeholder="fatihh"]",
            findUserButton: "button",
            followerCount: "input[placeholder="50"]",
            startButton: "button",
            credit: "a[href="/tools/send-follower"]"
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
            username: "input[placeholder="Kullanıcı adı"]",
            password: "input[placeholder="Şifre"]",
            loginButton: "button",
            targetUsername: "input[placeholder="fatihh"]",
            findUserButton: "button",
            followerCount: "input[placeholder="50"]",
            startButton: "button",
            credit: "a[href="/tools/send-follower"]"
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
            username: "input[placeholder="Kullanıcı adı"]",
            password: "input[placeholder="Şifre"]",
            loginButton: "button[type="submit"]",
            targetUsername: "input[placeholder="fatihh"]",
            findUserButton: "button",
            followerCount: "input[placeholder="50"]",
            startButton: "button",
            credit: "a[href="/tools/send-follower"]"
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
            username: "input[placeholder="Kullanıcı adı"]",
            password: "input[placeholder="Şifre"]",
            loginButton: "button",
            targetUsername: "input[placeholder="fatihh"]",
            findUserButton: "button",
            followerCount: "input[placeholder="50"]",
            startButton: "button",
            credit: "a[href="/tools/send-follower"]"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "takipciking_com",
        baseUrl: "https://www.takipciking.com",
        loginUrl: "https://www.takipciking.com/member",
        sendFollowerUrl: "https://www.takipciking.com/tools/send-follower",
        selectors: {
            username: "input[placeholder="Kullanıcı adı"]",
            password: "input[placeholder="Şifre"]",
            loginButton: "button",
            targetUsername: "input[placeholder="fatihh"]",
            findUserButton: "button",
            followerCount: "input[placeholder="50"]",
            startButton: "button",
            credit: "a[href="/tools/send-follower"]"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },

    {
        name: "takipcivar",
        baseUrl: "https://takipcivar.net",
        loginUrl: "https://takipcivar.net",
        sendFollowerUrl: "https://takipcivar.net/tools/send-follower",
        selectors: {
            username: "input[placeholder="Kullanıcı adı"]",
            password: "input[placeholder="Şifre"]",
            loginButton: "button[type="submit"]",
            targetUsername: "input[placeholder="fatihh"]",
            findUserButton: "button",
            followerCount: "input[placeholder="50"]",
            startButton: "button",
            credit: "a[href="/tools/send-follower"]"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "hepsitakipci",
        baseUrl: "https://www.hepsitakipci.com",
        loginUrl: "https://www.hepsitakipci.com/member",
        sendFollowerUrl: "https://www.hepsitakipci.com/tools/send-follower",
        selectors: {
            username: "input[placeholder="Kullanıcı adı"]",
            password: "input[placeholder="Şifre"]",
            loginButton: "button",
            targetUsername: "input[placeholder="fatihh"]",
            findUserButton: "button",
            followerCount: "input[placeholder="50"]",
            startButton: "button",
            credit: "a[href="/tools/send-follower"]"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    }
];

class MultiSiteAutomation {
    constructor(username, password, sitesToProcess = []) {
        this.credentials = {
            username: username,
            password: password
        };
        this.browser = null;
        this.page = null;
        this.currentSiteIndex = 0;
        this.sitesConfig = sitesToProcess.length > 0 
            ? allSitesConfig.filter(site => sitesToProcess.includes(site.name))
            : allSitesConfig;
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
                headless: "new",
                executablePath: await chromium.executablePath(),
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
                ]
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

            // Extrair antiForgeryToken se presente
            let antiForgeryToken = "";
            try {
                antiForgeryToken = await this.page.$eval("input[name="antiForgeryToken"]", el => el.value);
                console.log(`[${siteConfig.name}] antiForgeryToken encontrado: ${antiForgeryToken}`);
            } catch (e) {
                console.log(`[${siteConfig.name}] antiForgeryToken não encontrado ou erro ao extrair.`);
            }

            await this.page.waitForSelector(siteConfig.selectors.username, { timeout: 10000 });
            await this.page.type(siteConfig.selectors.username, this.credentials.username);
            await this.page.type(siteConfig.selectors.password, this.credentials.password);

            console.log(`[${siteConfig.name}] Credenciais preenchidas, tentando submeter o formulário...`);
            
            const form = await this.page.$("form");
            if (form) {
                await Promise.all([
                    this.page.waitForNavigation({ waitUntil: "networkidle2", timeout: 30000 }).catch(() => {}),
                    form.evaluate(form => form.submit())
                ]);
            } else {
                const loginButton = await this.page.evaluateHandle((buttonText) => {
                    const buttons = Array.from(document.querySelectorAll("button"));
                    return buttons.find(button => button.textContent.includes(buttonText));
                }, siteConfig.loginButtonText);

                if (!loginButton) {
                    throw new Error("Botão de login ou formulário não encontrado.");
                }

                await Promise.all([
                    this.page.waitForNavigation({ waitUntil: "networkidle2", timeout: 30000 }).catch(() => {}),
                    loginButton.click()
                ]);
            }

            console.log(`[${siteConfig.name}] Login realizado com sucesso!`);
            return true;

        } catch (error) {
            console.error(`[${siteConfig.name}] Erro durante o login:`, error.message);
            return false;
        }
    }

    async getFollowerCredits(siteConfig) {
        try {
            await this.page.goto(siteConfig.sendFollowerUrl, { waitUntil: "networkidle2", timeout: 30000 });
            await this.page.waitForSelector(siteConfig.selectors.credit, { timeout: 10000 });
            const credits = await this.page.$eval(siteConfig.selectors.credit, el => parseInt(el.textContent.trim(), 10));
            console.log(`[${siteConfig.name}] Créditos de seguidores disponíveis: ${credits}`);
            return credits;
        } catch (error) {
            console.error(`[${siteConfig.name}] Erro ao obter créditos de seguidores:`, error.message);
            return 0;
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

            if (!findUserButton) {
                throw new Error("Botão 'Kullanıcıyı Bul' não encontrado.");
            }

            await findUserButton.click();
            await this.page.waitForNavigation({ waitUntil: "networkidle2", timeout: 30000 }).catch(() => {});

            // Aguardar e preencher a quantidade de seguidores
            await this.page.waitForSelector(siteConfig.selectors.followerCount, { timeout: 10000 });
            await this.page.type(siteConfig.selectors.followerCount, followerCount.toString());

            console.log(`[${siteConfig.name}] Quantidade definida: ${followerCount} seguidores`);

            // Encontrar o botão "Start" ou "Başla"
            const startButton = await this.page.evaluateHandle((buttonTexts) => {
                const buttons = Array.from(document.querySelectorAll("button"));
                return buttons.find(button => buttonTexts.some(text => button.textContent.includes(text)));
            }, siteConfig.startButtonText);

            if (!startButton) {
                throw new Error("Botão 'Start' ou 'Başla' não encontrado.");
            }

            console.log(`[${siteConfig.name}] Iniciando envio de seguidores...`);
            await startButton.click();

            console.log(`[${siteConfig.name}] Envio iniciado! Aguardando 3 segundos antes de prosseguir...`);
            await new Promise(resolve => setTimeout(resolve, 3000)); // Pequena pausa para o envio iniciar

            // Recarregar a página para verificar os créditos após o envio
            console.log(`[${siteConfig.name}] Recarregando página para verificar créditos pós-envio...`);
            await this.page.reload({ waitUntil: "networkidle2", timeout: 30000 });

            const newCredits = await this.getFollowerCredits(siteConfig);
            if (newCredits < followerCount) {
                console.log(`[${siteConfig.name}] ✅ Envio confirmado! Créditos reduzidos de ${followerCount} para ${newCredits}.`);
            } else {
                console.log(`[${siteConfig.name}] ⚠️ Envio não confirmado. Créditos permaneceram em ${newCredits}.`);
            }
            console.log(`[${siteConfig.name}] ✅ Site processado com sucesso!`);
            return true;

        } catch (error) {
            console.error(`[${siteConfig.name}] Erro durante o envio de seguidores:`, error.message);
            return false;
        }
    }

    async startInfiniteLoop(targetUsername, followerCount) {
        console.log("🔄 INICIANDO LOOP INFINITO");
        console.log(`🎯 Usuário alvo: ${targetUsername}`);
        console.log(`👥 Seguidores por site: ${followerCount}`);
        console.log(`⏰ Intervalo entre ciclos: 1 hora e 30 minutos`);

        let cycleCount = 0;
        while (true) {
            cycleCount++;
            console.log(`🔥 ===== CICLO ${cycleCount} ===== 🔥`);
            console.log(`🚀 INICIANDO NOVO CICLO - ${new Date().toLocaleString()}`);
            console.log(`📊 Processando ${this.sitesConfig.length} sites...`);

            let successfulSites = 0;
            let failedSites = 0;

            for (let i = 0; i < this.sitesConfig.length; i++) {
                const siteConfig = this.sitesConfig[i];
                console.log(`📍 Site ${i + 1}/${this.sitesConfig.length}: ${siteConfig.name}`);
                console.log(`=== PROCESSANDO SITE: ${siteConfig.name.toUpperCase()} ===`);

                const loginSuccess = await this.login(siteConfig);
                if (loginSuccess) {
                    const credits = await this.getFollowerCredits(siteConfig);
                    if (credits > 0) {
                        const sendSuccess = await this.sendFollowers(siteConfig, targetUsername, followerCount);
                        if (sendSuccess) {
                            successfulSites++;
                            console.log(`✅ Sucesso! (${successfulSites}/${successfulSites + failedSites})`);
                        } else {
                            failedSites++;
                            console.log(`❌ Falha! (${failedSites}/${successfulSites + failedSites})`);
                        }
                    } else {
                        console.log(`[${siteConfig.name}] Créditos de seguidores em 0. Pulando para o próximo site...`);
                        failedSites++;
                        console.log(`❌ Falha! (${failedSites}/${successfulSites + failedSites})`);
                    }
                } else {
                    failedSites++;
                    console.log(`[${siteConfig.name}] Falha no login, pulando para o próximo site...`);
                    console.log(`❌ Falha! (${failedSites}/${successfulSites + failedSites})`);
                }

                if (i < this.sitesConfig.length - 1) {
                    console.log(`⏳ Aguardando 3 segundos antes do próximo site...`);
                    await new Promise(resolve => setTimeout(resolve, 3000));
                }
            }

            console.log(`📈 RESUMO DO CICLO:`);
            console.log(`✅ Sucessos: ${successfulSites}/${this.sitesConfig.length}`);
            console.log(`❌ Falhas: ${failedSites}/${this.sitesConfig.length}`);
            console.log(`📊 Taxa de sucesso: ${((successfulSites / this.sitesConfig.length) * 100).toFixed(1)}%`);
            console.log(`🏁 CICLO ${cycleCount} CONCLUÍDO!`);

            const waitTime = 90 * 60 * 1000; // 1 hora e 30 minutos em milissegundos
            const nextRunTime = new Date(Date.now() + waitTime);
            console.log(`⏰ Próximo ciclo em 1 hora e 30 minutos...`);
            console.log(`🕐 Próximo início previsto: ${nextRunTime.toLocaleString()}`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
    }
}

module.exports = MultiSiteAutomation;


