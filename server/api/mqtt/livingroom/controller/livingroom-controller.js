'use strict';
import mqtt from 'mqtt';
import MessageService from '../messageservice/livingroom-messageservice';

const client = mqtt.connect('mqtt://192.168.1.7');

client.on('connect', function() {
    client.subscribe("legoHouseWoonkamerInput");
});

export default class LivingRoomController {
    static LightOn(req, res) {
        MessageService.LightOn.publish();
        res.json(MessageService.LightOn.response());
    }

    static LightOff(req, res) {
        MessageService.LightOff.publish();
        res.json(MessageService.LightOn.response());
    }
    
}