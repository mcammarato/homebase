app.controller('statsCtrl', function($scope, $http){
  var url = 'http://localhost:5000/api/statsController';
  $http({
    method: 'GET',
    url: url,
  }).then(function(response) {

    var data = response.data;

    /* Game Stats */
    var gameStats = data.items[1].items[0];

    for (var i in gameStats) {
      $scope.gameStats = gameStats[i];
    }

    // First Team
    $scope.firstTeamAbbr = data.items[1].items[0].teamstats[0].TEAM_ABBREVIATION;
    $scope.firstTeamCity = data.items[1].items[0].teamstats[0].TEAM_CITY;
    $scope.firstTeamName = data.items[1].items[0].teamstats[0].TEAM_NAME;
    $scope.firstTeamPoints = data.items[1].items[0].teamstats[0].PTS;
    $scope.firstTeamDate = data.items[1].items[0].teamstats[0].URL_DATE;

    // Second Team
    $scope.secondTeamAbbr = data.items[1].items[0].teamstats[1].TEAM_ABBREVIATION;
    $scope.secondTeamCity = data.items[1].items[0].teamstats[1].TEAM_CITY;
    $scope.secondTeamName = data.items[1].items[0].teamstats[1].TEAM_NAME;
    $scope.secondTeamPoints = data.items[1].items[0].teamstats[1].PTS;
    $scope.secondTeamDate = data.items[1].items[0].teamstats[1].URL_DATE;


    /* Player Stats */
    var playerStats = data.items[0].items[0];

    for (var i in playerStats) {
      $scope.playerStats = playerStats[i];
    }

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
      console.log(element);
      var teamAttr = element.getAttribute('data-team');
      console.log(teamAttr);
      if (teamAttr == 'GSW') {
        var test = document.querySelector('.logo');
        console.log(test);
      }
    });
  }
  insertTeamLogos();

});
