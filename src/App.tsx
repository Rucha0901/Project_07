import { StatusBar, StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import  {Snackbar}  from 'react-native-snackbar';
import Icons from './components/Icons';
import { useState } from 'react';

function App() {
  const [isCross,setIsCross]=useState<boolean>(false)
  const [gameWinner,setGameWinner]=useState<string>('')
  const [gameState,setGameState]=useState(new Array(9).fill('empty',0,9))

  const reloadGame=()=>{
    setIsCross(false)
    setGameWinner('')
    setGameWinner(new Array(9).fill('empty',0,9))
  }

  const checkIsWinner=()=>{
    //checking winner of game
    if(
      gameState[0]===gameState[1]&&
      gameState[0]===gameState[2]&&
      gameState[0]!=='empty'
    ){
      setGameWinner(`${gameState[0]} won the game!`);
    } else if(
      gameState[4]===gameState[5]&&
      gameState[3]===gameState[4]&&
      gameState[3]!=='empty'
    ){
      setGameWinner(`${gameState[3]} won the game!`);
    } else if(
      gameState[6]===gameState[7]&&
      gameState[7]===gameState[8]&&
      gameState[6]!=='empty'
    ){
      setGameWinner(`${gameState[6]} won the game!`);
    } else if(
      gameState[0]===gameState[3]&&
      gameState[3]===gameState[6]&&
      gameState[0]!=='empty'
    ){
      setGameWinner(`${gameState[0]} won the game!`);
    } else if(
      gameState[4]===gameState[7]&&
      gameState[1]===gameState[4]&&
      gameState[1]!=='empty'
    ){
      setGameWinner(`${gameState[1]} won the game!`);
    } else if(
      gameState[5]===gameState[8]&&
      gameState[2]===gameState[5]&&
      gameState[2]!=='empty'
    ){
      setGameWinner(`${gameState[2]} won the game!`);
    } else if(
      gameState[4]===gameState[8]&&
      gameState[0]===gameState[4]&&
      gameState[0]!=='empty'
    ){
      setGameWinner(`${gameState[0]} won the game!`);
    } else if(
      gameState[4]===gameState[6]&&
      gameState[2]===gameState[4]&&
      gameState[2]!=='empty'
    ){
      setGameWinner(`${gameState[2]} won the game!`);
    } else if(!gameState.includes('empty',0)){
      setGameWinner("Draw game......");
    }

  return (
    <SafeAreaView>
      <StatusBar 
       />
       <View>
        <Text>Tic Tac Toe</Text>
       </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
