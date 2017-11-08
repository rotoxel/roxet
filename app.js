const server = require('express'),
      md5 = require('md5'),
      ssh = require('ssh'),
      client = require('./models/client');

class User {
      
  constructor(user, music, films, player, sshKey) {
    this.user = user;
    this.music = music;
    this.player = player;
    this.films = films;
    this.client = client.new();
    this.ssh = ssh.create('sshKey').connect();
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
      user: this.user,
      music: this.music,
      films: this.films    
    }; 
  }
      
}

class Client {
}

class Server {
      constructor(port, ip) {
            this.con = express.connect(ip+':'port)
      }
}

module.exports = Server;
