import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
export const CheckBotContext = createContext({ undefined });

export const CheckBotProvider = (props) => {
    const { children } = props;
    
    const bots = [
        'AdsBot-Google', 'Amazonbot', 'anthropic-ai', 'Applebot', 
        'AwarioRssBot', 'AwarioSmartBot', 'Bytespider', 'CCBot', 
        'ChatGPT', 'ChatGPT-User', 'Claude-Web', 'ClaudeBot', 
        'cohere-ai', 'DataForSeoBot', 'Diffbot', 'FacebookBot', 
        'FacebookBot', 'Google-Extended', 'GPTBot', 'ImagesiftBot', 
        'magpie-crawler', 'omgili', 'Omgilibot', 'peer39_crawler', 
        'PerplexityBot', 'YouBot'
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

    useEffect(() => {
        checkIsBot();
    }, []);

    return (
        <CheckBotContext.Provider
            value={{
                checkIsBot
            }}
        >
            {children}
        </CheckBotContext.Provider>
    );
};

CheckBotProvider.propTypes = {
    children: PropTypes.node
};

export const CheckBotContextConsumer = CheckBotContext.Consumer;

export const useCheckBotContext = () => useContext(CheckBotContext);
