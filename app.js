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
    this.test = test tak ?
  }
  
    
  getUser() {
    return this.user;
  }ddd

  getUser() {
    return this.user;
  }
  
  setUser(user) {
    this.user = user;
  }
  
  serialize() {
    return {
      user: this.user,
      music: this.music
  }; 
  }
}

class Client {
  setUser(user) {
        
    this.user = user;
  }
  
  setUser(user) {
    this.user = user;
  }
  
}

class Device {
  setUser(user) {
    this.user = user;
  }
  
  setUser(user) {
    this.user = user;
  }
  

class Method{
  setUser(user) {
    this.user = user;
  }
  
  setUser(user) {
    this.user = user;
  }
  
      
}

class Server {
      constructor(port, ip) {
            this.con = express.connect(ip+':'port)
      }
}

module.exports = Server;
