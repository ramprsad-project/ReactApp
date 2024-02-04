import React, {useEffect} from 'react';
import {LookerEmbedSDK} from '@looker/embed-sdk';

const LookerEmbed = () => {
    useEffect(() => {
        // Initialize Looker Embed SDK
        LookerEmbedSDK.init();
    })
}