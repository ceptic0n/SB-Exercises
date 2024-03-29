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

  it('should check if alice exists on the table updateServerTable', function(){
    submitServerInfo();
    let camera = document.querySelector("#server1 td");
    expect(camera.innerText).toBe("Alice");
  });

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    
  });
});

