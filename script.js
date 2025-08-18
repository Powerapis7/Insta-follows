const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");
const chalk = require("chalk");
// Configuração dos sites
const sitesConfig = [
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
            startButton: "button",
            credit: ".credit-count, .credits, .balance, .user-credits, [class*=\'credit\'], [class*=\'balance\'], [id*=\'credit\'], [id*=\'balance\']"
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
            startButton: "button",
            credit: ".credit-count, .credits, .balance, .user-credits, [class*=\'credit\'], [class*=\'balance\'], [id*=\'credit\'], [id*=\'balance\']"
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
            credit: ".credit-count, .credits, .balance, .user-credits, [class*=\'credit\'], [class*=\'balance\'], [id*=\'credit\'], [id*=\'balance\']"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "takipcizen",
        baseUrl: "https://takipcizen.com",
        loginUrl: "https://takipcizen.com/login",
        sendFollowerUrl: "https://takipcizen.com/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[placeholder=\"Şifre\"]",
            loginButton: "button",
            targetUsername: "input[placeholder=\"fatihh\"]",
            findUserButton: "button",
            followerCount: "input[placeholder=\"50\"]",
            startButton: "button",
            credit: ".credit-count, .credits, .balance, .user-credits, [class*=\'credit\'], [class*=\'balance\'], [id*=\'credit\'], [id*=\'balance\']"
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
            credit: ".credit-count, .credits, .balance, .user-credits, [class*=\'credit\'], [class*=\'balance\'], [id*=\'credit\'], [id*=\'balance\']"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
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
            credit: ".credit-count, .credits, .balance, .user-credits, [class*=\'credit\'], [class*=\'balance\'], [id*=\'credit\'], [id*=\'balance\']"
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
            credit: ".credit-count, .credits, .balance, .user-credits, [class*=\'credit\'], [class*=\'balance\'], [id*=\'credit\'], [id*=\'balance\']"
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
            credit: ".credit-count, .credits, .balance, .user-credits, [class*=\'credit\'], [class*=\'balance\'], [id*=\'credit\'], [id*=\'balance\']"
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
            credit: ".credit-count, .credits, .balance, .user-credits, [class*=\'credit\'], [class*=\'balance\'], [id*=\'credit\'], [id*=\'balance\']"
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
            credit: ".credit-count, .credits, .balance, .user-credits, [class*=\'credit\'], [class*=\'balance\'], [id*=\'credit\'], [id*=\'balance\']"
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
            followerCount: "input[placeholder=\"25\"]",
            startButton: "button",
            credit: ".credit-count, .credits, .balance, .user-credits, [class*=\'credit\'], [class*=\'balance\'], [id*=\'credit\'], [id*=\'balance\']"
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
            credit: ".credit-count, .credits, .balance, .user-credits, [class*=\'credit\'], [class*=\'balance\'], [id*=\'credit\'], [id*=\'balance\']"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "canlitakipci",
        baseUrl: "https://canlitakipci.com",
        loginUrl: "https://canlitakipci.com",
        sendFollowerUrl: "https://canlitakipci.com/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[name=\"password\"]",
            loginButton: "button",
            targetUsername: "input[name=\"userName\"]",
            findUserButton: "button[type=\"submit\"]",
            followerCount: "input[name=\"followerCount\"]",
            startButton: "button[type=\"submit\"]",
            credit: ".credit-count, .credits, .balance, .user-credits, [class*=\'credit\'], [class*=\'balance\'], [id*=\'credit\'], [id*=\'balance\']"
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
            targetUsername: "input[name=\"userName\"]",
            findUserButton: "button[type=\"submit\"]",
            followerCount: "input[name=\"followerCount\"]",
            startButton: "button[type=\"submit\"]",
            credit: ".credit-count, .credits, .balance, .user-credits, [class*=\'credit\'], [class*=\'balance\'], [id*=\'credit\'], [id*=\'balance\']"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    },
    {
        name: "takipcivar",
        baseUrl: "https://takipcivar.net",
        loginUrl: "https://takipcivar.net/4c66efa5ce35c3b5ea99111d090bb362a713a38d",
        sendFollowerUrl: "https://takipcivar.net/tools/send-follower",
        selectors: {
            username: "input[placeholder=\"Kullanıcı adı\"]",
            password: "input[name=\"password\"]",
            loginButton: "button",
            targetUsername: "input[name=\"userName\"]",
            findUserButton: "button[type=\"submit\"]",
            followerCount: "input[name=\"followerCount\"]",
            startButton: "button[type=\"submit\"]",
            credit: ".credit-count, .credits, .balance, .user-credits, [class*=\'credit\'], [class*=\'balance\'], [id*=\'credit\'], [id*=\'balance\']"
        },
        loginButtonText: "Giriş yap",
        findUserButtonText: "Kullanıcıyı Bul",
        startButtonText: ["Start", "Başla"]
    }
];

class Logger {
    static info(site, message) {
           console.log(chalk.blue(`[${new Date().toLocaleTimeString()}]`) + chalk.cyan(` [${site}] `) + chalk.white(message));
    }
    
    static success(site, message) {
        console.log(chalk.blue(`[${new Date().toLocaleTimeString()}]`) + chalk.green(` [${site}] ✓ `) + chalk.white(message));
    }
    
    static error(site, message) {
        console.log(chalk.blue(`[${new Date().toLocaleTimeString()}]`) + chalk.red(` [${site}] ✗ `) + chalk.white(message));
    }
    
    static warning(site, message) {
        console.log(chalk.blue(`[${new Date().toLocaleTimeString()}]`) + chalk.yellow(` [${site}] ⚠ `) + chalk.white(message));
    }
    
    static header(message) {
        console.log(chalk.keyword("magenta").bold("\n" + "=".repeat(60)));
        console.log(chalk.hex("#FF00FF").bold(message));
        console.log(chalk.hex("#FF00FF").bold("=".repeat(60) + "\n"));
    }
    
    static stats(stats) {
        console.log(chalk.keyword("magenta").bold("\n" + "=".repeat(60)));
        console.log(chalk.hex("#FF00FF").bold("ESTATÍSTICAS FINAIS"));
        console.log(chalk.hex("#FF00FF").bold("=".repeat(60)));
        console.log(chalk.green(`✓ Sites com sucesso: ${stats.success}`));
        console.log(chalk.red(`✗ Sites com erro: ${stats.error}`));
        console.log(chalk.yellow(`⚠ Sites pulados: ${stats.skipped}`));
        console.log(chalk.blue(`📊 Total de sites: ${stats.total}`));
        console.log(chalk.cyan(`📈 Taxa de sucesso: ${((stats.success / stats.total) * 100).toFixed(1)}%`));
        console.log(chalk.hex("#FF00FF")("=".repeat(60) + "\n"));
    }
}

class MultiSiteAutomation {
    constructor(username, password) {
        this.credentials = {
            username: username,
            password: password
        };
        this.browser = null;
        this.page = null;
        this.currentSiteIndex = 0;
        this.sitesConfig = sitesConfig;
        this.stats = {
            success: 0,
            error: 0,
            skipped: 0,
            total: 0
        };
    }

    async initBrowser() {
        const isProduction = process.env.NODE_ENV === 'production' || process.env.RENDER;
        
        let browserOptions;
        
        if (isProduction) {
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
                ],
                ignoreHTTPSErrors: true,
            };
        }

        this.browser = await puppeteer.launch(browserOptions);
        this.page = await this.browser.newPage();
    }

    async closeBrowser() {
        if (this.browser) {
            await this.browser.close();
        }
    }

    async login(siteConfig) {
        Logger.info(siteConfig.name, "Navegando para a página de login...");
        await this.page.goto(siteConfig.loginUrl, { waitUntil: "networkidle2" });

        Logger.info(siteConfig.name, "Preenchendo credenciais...");
        await this.page.type(siteConfig.selectors.username, this.credentials.username);
        await this.page.type(siteConfig.selectors.password, this.credentials.password);

        Logger.info(siteConfig.name, "Clicando no botão de login...");
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle2" }),
            this.page.click(siteConfig.selectors.loginButton)
        ]);

        const currentUrl = this.page.url();
        if (currentUrl.includes("member") || currentUrl.includes("tools")) {
            Logger.success(siteConfig.name, "Login bem-sucedido.");
            return true;
        } else {
            Logger.error(siteConfig.name, "Falha no login. Credenciais inválidas ou seletor incorreto.");
            return false;
        }
    }

    async getCredit(siteConfig) {
        Logger.info(siteConfig.name, "Obtendo créditos...");
        try {
            await this.page.goto(siteConfig.sendFollowerUrl, { waitUntil: "networkidle2" });
            const creditElement = await this.page.$(siteConfig.selectors.credit);
            if (creditElement) {
                const creditText = await this.page.evaluate(el => el.textContent, creditElement);
                Logger.info(siteConfig.name, `Créditos disponíveis: ${creditText.trim()}`);
                return parseInt(creditText.replace(/\D/g, "")) || 0;
            } else {
                Logger.warning(siteConfig.name, "Elemento de crédito não encontrado.");
                return 0;
            }
        } catch (error) {
            Logger.error(siteConfig.name, `Erro ao obter créditos: ${error.message}`);
            return 0;
        }
    }

    async sendFollowers(siteConfig, targetUsername, followerCount) {
        Logger.info(siteConfig.name, `Enviando ${followerCount} seguidores para ${targetUsername}...`);
        try {
            await this.page.goto(siteConfig.sendFollowerUrl, { waitUntil: "networkidle2" });

            Logger.info(siteConfig.name, "Preenchendo nome de usuário alvo...");
            await this.page.type(siteConfig.selectors.targetUsername, targetUsername);

            Logger.info(siteConfig.name, "Clicando no botão 'Encontrar Usuário'...");
            await Promise.all([
                this.page.waitForNavigation({ waitUntil: "networkidle2" }),
                this.page.click(siteConfig.selectors.findUserButton)
            ]);

            Logger.info(siteConfig.name, "Preenchendo contagem de seguidores...");
            await this.page.type(siteConfig.selectors.followerCount, followerCount.toString());

            Logger.info(siteConfig.name, "Clicando no botão 'Iniciar'...");
            await Promise.all([
                this.page.waitForNavigation({ waitUntil: "networkidle2" }),
                this.page.click(siteConfig.selectors.startButton)
            ]);

            Logger.success(siteConfig.name, `Envio de ${followerCount} seguidores para ${targetUsername} concluído.`);
            return true;
        } catch (error) {
            Logger.error(siteConfig.name, `Erro ao enviar seguidores: ${error.message}`);
            return false;
        }
    }

    async runAutomation(targetUsername, followerCount) {
        Logger.header("INICIANDO AUTOMAÇÃO MULTI-SITE");
        this.stats.total = this.sitesConfig.length;

        for (let i = 0; i < this.sitesConfig.length; i++) {
            this.currentSiteIndex = i;
            const siteConfig = this.sitesConfig[i];
            Logger.header(`Processando site: ${siteConfig.name}`);

            try {
                await this.initBrowser();
                const loggedIn = await this.login(siteConfig);

                if (loggedIn) {
                    const credit = await this.getCredit(siteConfig);
                    if (credit > 0) {
                        const sent = await this.sendFollowers(siteConfig, targetUsername, followerCount);
                        if (sent) {
                            this.stats.success++;
                        } else {
                            this.stats.error++;
                        }
                    } else {
                        Logger.warning(siteConfig.name, "Créditos insuficientes. Pulando envio de seguidores.");
                        this.stats.skipped++;
                    }
                } else {
                    this.stats.error++;
                }
            } catch (error) {
                Logger.error(siteConfig.name, `Erro inesperado durante a automação: ${error.message}`);
                this.stats.error++;
            } finally {
                await this.closeBrowser();
            }
        }

        Logger.stats(this.stats);
        Logger.header("AUTOMAÇÃO CONCLUÍDA");
    }
}

module.exports = MultiSiteAutomation;


