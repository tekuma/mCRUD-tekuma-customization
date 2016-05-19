/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /media              ->  index
 * POST    /media              ->  create
 * GET     /media/:id          ->  show
 * PUT     /media/:id          ->  update
 * DELETE  /media/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import {Media} from '../../sqldb';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    return entity.updateAttributes(updates)
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.destroy()
        .then(() => {
          const fs = require('fs');
          fs.unlink('client/'+entity.path, (err) => {
            if (err) {}
          });
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Medias
export function index(req, res) {
  Media.findAll()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Media from the DB
export function show(req, res) {
  Media.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Media in the DB
export function create(req, res) {
  req.files.file.path = req.files.file.path.replace("client\\", "").replace('client/','').replace('client//','');
  Media.create(req.files.file)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Media in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Media.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Media from the DB
export function destroy(req, res) {
  Media.find({
    where: {
      _id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
