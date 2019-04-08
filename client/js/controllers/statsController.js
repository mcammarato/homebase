app.controller('statsCtrl', function($scope, $http){
  //var url = 'https://cammobase.azurewebsites.net/api/statsController';
  var url = 'http://localhost:5000/api/testdatacontroller';
  $http({
    method: 'GET',
    url: url,
  }).then(function(response) {

    var data = response.data.games;
    //console.log(data);

    var games = [];

    angular.forEach(data, function(value) {

      game = {};  
      var arenaName = value.arena.name;
      var arenaCity = value.arena.city;
      var arenaState = value.arena.stateAbbr;
      var clock = value.clock;
      var hTeamLoss = value.hTeam.loss;
      var hTeamWin = value.hTeam.win;
      var hTeamTriCode = value.hTeam.triCode.toLowerCase();;
      var hTeamScore = value.hTeam.score;
      var vTeamLoss = value.vTeam.loss;
      var vTeamWin = value.vTeam.win;
      var vTeamTriCode = value.vTeam.triCode.toLowerCase();;
      var vTeamScore = value.vTeam.score;
      var period = value.period.current;
      var startTimeEastern = value.startTimeEastern

      game['arenaName'] = arenaName;
      game['arenaCity'] = arenaCity;
      game['arenaState'] = arenaState;
      game['clock'] = clock;
      game['hTeamLoss'] = hTeamLoss;
      game['hTeamWin'] = hTeamWin;
      game['hTeamTriCode'] = hTeamTriCode;
      game['hTeamScore'] = hTeamScore;
      game['vTeamLoss'] = vTeamLoss;
      game['vTeamWin'] = vTeamWin;
      game['vTeamTriCode'] = vTeamTriCode;
      game['vTeamScore'] = vTeamScore;
      game['period'] = period;
      game['startTimeEastern'] = startTimeEastern;
      
      games.push(game);
    });
    $scope.nbaGames = games;

    //console.log(games);

  }, function(response) {
    console.log(response.statusText);
  });

  function insertTeamLogos() {
    // var players = document.getElementsByClassName('player');
    // var playersArray = [];
    // for (var i = 0; i < players.length; i++) {
    //   playersArray.push(players[i])
    // };
    // console.log(playersArray);

    var teams = document.getElementsByClassName('team');
    var teamsArray = [];
    for (var i = 0; i < teams.length; i++) {
      teamsArray.push(teams[i])
    }
    teamsArray.forEach(function(element){
      var teamAttr = element.getAttribute('data-team');
      if (teamAttr == 'GSW') {
        var test = document.querySelector('.logo');
      }
    });
  }
  insertTeamLogos();

});
