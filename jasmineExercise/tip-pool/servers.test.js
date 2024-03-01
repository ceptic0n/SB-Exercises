describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  // it('should calculate the tip average', function(){
  //   submitServerInfo();

  //   expect(something on the dom).toEqual();
  // });

  afterEach(function() {
    // teardown logic
    serverTBody.innerHTML = '';
    allServers = {};
    serverId = 0;
    
    console.log("Reset!");
  });
});

