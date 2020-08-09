module.exports = (client) => {
  client.user.setPresence({ activity: { name: `${client.users.cache.size} คนน่ารัก` , type: 'WATCHING'}, status: 'online' });
  client.setInterval(() => {
        client.user.setPresence({ activity: { name: `${client.users.cache.size} คนน่ารัก` , type: 'WATCHING'}, status: 'online' });
  }, 60000)
  console.log(`Logged In !`);
}
