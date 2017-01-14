'use strict';
import mqtt from 'mqtt';

const client = mqtt.connect('mqtt://192.168.1.7');


client.on('connect', () => {
    client.subscribe("legoHouseWoonkamerInput");
});

let MessageService = {};

MessageService.LightOn = {
    publish: () => {
        client.publish("legoHouseWoonkamerInput", "aan#");
    },
    response: () => {
        return 'Light turned on!';
    }
};

MessageService.LightOff = {
    publish: () => {
        client.publish("legoHouseWoonkamerInput", "uit#");
    },
    response: () => {
        return 'Light turned off!';
    }
};

export default MessageService;