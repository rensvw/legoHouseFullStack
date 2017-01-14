'use strict';
import mongoose from 'mongoose';
import Promise from 'bluebird';
import livingRoomValuesSchema from '../model/livingroom-model';
import _ from 'lodash';

livingRoomValuesSchema.statics.getAllLivingRoomValues = () => {
    return new Promise((resolve, reject) => {
        var _query = {};

        LivingRoom
            .find(_query)
            .exec((err, livingroom) => {
                err ? reject(err) :
                    resolve(livingroom);
            });
    });
}

livingRoomValuesSchema.statics.getLivingRoomValue = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id))
            return reject(new TypeError('Id is not a valid string.'));

        LivingRoom
            .findById(id)
            .exec((err, livingroom) => {
                err ? reject(err) :
                    resolve(livingroom);
            });
    });
}

livingRoomValuesSchema.statics.deleteLivingRoomValues = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id))
            return reject(new TypeError('Id is not a valid string.'));

        LivingRoom
            .findByIdAndRemove(id)
            .exec((err, deleted) => {
                err ? reject(err) :
                    resolve();
            });
    });
}

var LivingRoom = mongoose.model('LivingRoom', livingRoomValuesSchema);

export default LivingRoom;