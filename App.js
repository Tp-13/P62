import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import db from './config';

export default class App extends Component {
  constructor() {
    super();
    this.state = { teamsRank: [] };
  }

  showTeamsRank = () => {
    var teams = [];
    var teamRef = db.ref('Teams/');
    teamRef.on('value', (data) => {
      var teamList = data.val();
      for (var team in teamList) {
        if (teamList[team]['isButtonPressed'] === true) {
          teamList[team]['teamName'] = team;
          teams.push(teamList[team]);
        }
      }
      teams.sort(function (team1, team2) {
        return team1.timestamp - team2.timestamp;
      });
      this.setState({ teamsRank: teams });
    });
  };

  componentDidMount() {
    this.showTeamsRank();
  }

  resetdb = () => {
    var resetdb = db.ref('Teams/').set({
      blue: { isButtonPressed: false, timestamp: 0 },
      red: { isButtonPressed: false, timestamp: 0 },
      yellow: { isButtonPressed: false, timestamp: 0 },
      green: { isButtonPressed: false, timestamp: 0 },
    });
    this.setState({teamsRank: []})
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {this.state.teamsRank.map((team) => (
            <View
              style={{
                width: 140,
                height: 50,
                borderWidth: 2,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: team.teamName,
              }}>
              <Text>{team.teamName.toUpperCase()}</Text>
            </View>
          ))}
        </View>
        <Button title="reset" onPress={this.resetdb} />
      </View>
    );
  }
}
