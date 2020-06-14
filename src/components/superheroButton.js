import React from "react";
import Helmet from "react-helmet";

function handleScriptInject({ scriptTags }) {
    if (scriptTags) {
        const scriptTag = scriptTags[0];
        scriptTag.onload = handleLoad;
    }
}

function handleLoad() {
    window.superheroButton('.superhero-icon', { size: 'icon', account: 'kryptokrauts.chain' });
    window.superheroButton('.superhero-small', { size: 'small', account: 'kryptokrauts.chain' });
    window.superheroButton('.superhero-medium', { size: 'medium', account: 'kryptokrauts.chain' });
    window.superheroButton('.superhero-large', { size: 'large', account: 'kryptokrauts.chain' });
}

export default () => {
    return <>
        <Helmet
            script={[{ src: '/scripts/superhero-button.styles.js' }]}
            // Helmet doesn't support `onload` in script objects so we have to hack in our own
            onChangeClientState={(newState, addedTags) => handleScriptInject(addedTags)}
        />
    </>
}