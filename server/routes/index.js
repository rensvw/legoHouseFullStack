import TodoRoutes from '../api/todo/routes/todo-routes';
import LivngRoomRoutes from '../api/livingroom/routes/livingroom-routes';
import LivngRoomMqttRoutes from '../api/mqtt/livingroom/routes/livingroom-routes';


export default class Routes {
    static init(app, router) {
        LivngRoomRoutes.init(router);
        LivngRoomMqttRoutes.init(router);

        app.use('/', router);
    }
}