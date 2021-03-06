import LivingRoomController from '../controller/livingroom-controller';

export default class LivingRoomRoutes {
    static init(router) {
        router
            .route('/api/livingroom')
            .get(LivingRoomController.getAllLivingRoomValues);

        router
            .route('/api/livingroom/:id')
            .get(LivingRoomController.getLivingRoomValue)
            .delete(LivingRoomController.deleteLivingRoomValues);
    }
}