app.controller('statsCtrl', function($scope, $http){
  var url = 'http://localhost:5000/api/statsController';
  $http({
    method: 'GET',
    url: url,
  }).then(function(response) {

    var data = response.data;

    /* Game Stats */
    var gameStats = data.items[1].items[0];
    console.log(gameStats);

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
    console.log(playerStats);

    for (var i in playerStats) {
      $scope.playerStats = playerStats[i];
    }

    $(document).ready(function(){
      // Insert Team Logos
      var player = $('.player');
      var team = $('.team');
      function insertTeamLogos() {
        $.each(player, function() {
          if ($(this).attr('data-team') == 'GSW') {
            $(this).find('.team').replaceWith('<img src="images/warriors.png" />');
          }
          else if ($(this).attr('data-team') == 'CLE') {
            $(this).find('.team').replaceWith('<img src="images/cavs.png" />');
          }
        })

        $.each(team, function() {
          if ($(this).attr('data-team') == 'GSW') {
            $(this).find('.logo').replaceWith('<img src="images/warriors.png" />');
          }
          else if ($(this).attr('data-team') == 'CLE') {
            $(this).find('.logo').replaceWith('<img src="images/cavs.png" />');
          }
        })
      }
      insertTeamLogos();
    });



  }, function(response) {
    console.log(response.statusText);
  });
});
