const server = require('express'),
      md5 = require('md5'),
      ssh = require('ssh');
      client = require('./models/client');

class User {
  constructor(user, music, films, player) {
    this.user = user;
    this.music = music;
    this.player = player;
    this.films = films;
    this.client = client.new();
  }
  
  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }
  
  setUser(user) {
    this.user = user;
  }
  
  serialize() {
    return {
      user: user,
      music: music
    }; 
  }
      
}

module.exports = Server;
