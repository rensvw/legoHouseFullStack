import LivingRoomController from '../controller/livingroom-controller';

export default class LivingRoomRoutes {
    static init(router) {
        router
            .route('/api/mqtt/livingroom/lighton')
            .get(LivingRoomController.LightOn);
        router
            .route('/api/mqtt/livingroom/lightoff')
            .get(LivingRoomController.LightOff);
        router
            .route('/api/mqtt/livingroom/heatingon')
            .get(LivingRoomController.HeatingOn);
        router
            .route('/api/mqtt/livingroom/heatingoff')
            .get(LivingRoomController.HeatingOff);
    }
}