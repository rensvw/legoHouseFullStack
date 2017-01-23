'use strict';
import mqtt from 'mqtt';

const client = mqtt.connect('mqtt://192.168.1.7');
const topic = "legoHouseWoonkamerInput";

client.on('connect', () => {
    client.subscribe(topic);
});

let MessageService = {};

MessageService.LightOn = {
    publish: () => {
        client.publish(topic, "lighton#");
    },
    response: () => {
        return 'Light turned on!';
    }
};

MessageService.LightOff = {
    publish: () => {
        client.publish(topic, "lightoff#");
    },
    response: () => {
        return 'Light turned off!';
    }
};

MessageService.HeatingOn = {
    publish: () => {
        client.publish(topic, "heatingon#");
    },
    response: () => {
        return 'Heating turned on!';
    }
};

MessageService.HeatingOff = {
    publish: () => {
        client.publish(topic, "heatingoff#");
    },
    response: () => {
        return 'Heating turned off!';
    }
};

export default MessageService;