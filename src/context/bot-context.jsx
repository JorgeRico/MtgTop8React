import { createContext, useContext } from "react";
export const CheckBotContext = createContext();

export const CheckBotProvider = ({ children }) => {    
    // const bots = [
    //     'AdsBot-Google', 'Amazonbot', 'anthropic-ai', 'Applebot', 
    //     'AwarioRssBot', 'AwarioSmartBot', 'Bytespider', 'CCBot', 
    //     'ChatGPT', 'ChatGPT-User', 'Claude-Web', 'ClaudeBot', 
    //     'cohere-ai', 'DataForSeoBot', 'Diffbot', 'FacebookBot', 
    //     'FacebookBot', 'Google-Extended', 'GPTBot', 'ImagesiftBot', 
    //     'magpie-crawler', 'omgili', 'Omgilibot', 'peer39_crawler', 
    //     'PerplexityBot', 'YouBot'
    // ];

    const bots = [
        'anthropic-ai', 
        'CCBot', 
        'ChatGPT', 'ChatGPT-User', 'Claude-Web', 'ClaudeBot', 
        'cohere-ai', 
        'GPTBot', 'ImagesiftBot', 
        'magpie-crawler', 'omgili', 'Omgilibot', 'peer39_crawler', 
        'PerplexityBot'
    ];
    
    function checkIsBot() {
        let userAgent = window.navigator.userAgent;
        let isBot     = false;

        bots.map((item) => {
            if (userAgent.includes(item)) {
                return isBot = true;
            }
        });

        if (isBot) {
            return new Response(null, { status: 401 })
        } else {
            return null;
        }
    };

    return (
        <CheckBotContext
            value={{
                checkIsBot
            }}
        >
            {children}
        </CheckBotContext>
    );
};

export const useCheckBotContext = () => useContext(CheckBotContext);
