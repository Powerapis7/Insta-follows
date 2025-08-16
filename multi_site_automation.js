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
            startButton: "button",
            credit: "a[href=\"/tools/send-follower\"]"
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
            startButton: "button",
            credit: "a[href=\"/tools/send-follower\"]"
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
            startButton: "button",
            credit: "a[href=\"/tools/send-follower\"]"
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
            startButton: "button",
            credit: "a[href=\"/tools/send-follower\"]"
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
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button",
            credit: "a[href=\"/tools/send-follower\"]"
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
            startButton: "button",
            credit: "a[href=\"/tools/send-follower\"]"
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
            startButton: "button",
            credit: "a[href=\"/tools/send-follower\"]"
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
            startButton: "button",
            credit: "a[href=\"/tools/send-follower\"]"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "canlitakipci",
        baseUrl: "https://canlitakipci.com",
        loginUrl: "https://canlitakipci.com/611744f72836816fb8cfa5ec3970c24e717e4e20",
        sendFollowerUrl: "https://canlitakipci.com/tools/send-follower",
        selectors: {
            username: "input[name=\"username\"]",
            password: "input[name=\"password\"]",
            loginButton: "button#login_insta",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button",
            credit: "a[href=\"/tools/send-follower\"]"
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
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button",
            credit: "a[href=\"/tools/send-follower\"]"
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
            username: "input[name=\"username\"]",
            password: "input[name=\"password\"]",
            loginButton: "button#login_insta",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button",
            credit: "a[href=\"/tools/send-follower\"]"
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
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button",
            credit: "a[href=\"/tools/send-follower\"]"
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
        this.sitesConfig = sitesConfig; // Adicionar sitesConfig ao construtor
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
                antiForgeryToken = await this.page.$eval("input[name=\"antiForgeryToken\"]", el => el.value);
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
                return buttons.find(button => 
                    buttonTexts.some(text => button.textContent.includes(text))
                );
            }, siteConfig.startButtonText);

            if (startButton) {
                await Promise.all([
                    this.page.waitForNavigation({ waitUntil: "networkidle2", timeout: 30000 }).catch(() => {}),
                    startButton.click()
                ]);
            }

            console.log(`[${siteConfig.name}] Envio de seguidores iniciado com sucesso!`);
            return true;

        } catch (error) {
            console.error(`[${siteConfig.name}] Erro durante o envio de seguidores:`, error.message);
            return false;
        }
    }

    async runSingleSite(siteConfig, targetUsername, followerCount = 500) {
        try {
            console.log(`\n=== Iniciando automação para ${siteConfig.name} ===`);
            
            const loginSuccess = await this.login(siteConfig);
            if (!loginSuccess) {
                console.log(`[${siteConfig.name}] Falha no login. Pulando para o próximo site.`);
                return false;
            }

            const credits = await this.getFollowerCredits(siteConfig);
            if (credits < followerCount) {
                console.log(`[${siteConfig.name}] Créditos insuficientes (${credits}). Necessário: ${followerCount}`);
                return false;
            }

            const sendSuccess = await this.sendFollowers(siteConfig, targetUsername, followerCount);
            if (sendSuccess) {
                console.log(`[${siteConfig.name}] Automação concluída com sucesso!`);
                return true;
            } else {
                console.log(`[${siteConfig.name}] Falha no envio de seguidores.`);
                return false;
            }

        } catch (error) {
            console.error(`[${siteConfig.name}] Erro geral:`, error.message);
            return false;
        }
    }

    async startInfiniteLoop(targetUsername, followerCount = 500) {
        await this.initBrowser();
        
        const results = [];
        
        for (const siteConfig of this.sitesConfig) { // Usar this.sitesConfig
            const result = await this.runSingleSite(siteConfig, targetUsername, followerCount);
            results.push({
                site: siteConfig.name,
                success: result
            });
            
            // Aguardar um pouco entre os sites para evitar sobrecarga
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
        
        await this.closeBrowser();
        
        console.log("\n=== RESUMO DOS RESULTADOS ===");
        results.forEach(result => {
            console.log(`${result.site}: ${result.success ? 'SUCESSO' : 'FALHA'}`);
        });
        
        return results;
    }
}

module.exports = MultiSiteAutomation;
module.exports.sitesConfig = sitesConfig;

