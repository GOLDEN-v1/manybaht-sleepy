module.exports = (client) => {
  client.user.setPresence({ activity: { name: `${client.users.cache.size} คนน่ารัก` , type: 'WATCHING'}, status: 'online' })
  console.log(`Logged In !`);
}
