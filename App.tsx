import { View} from "react-native";
import React from "react";

import User from "./components/User";
import {PostsContext,UserContext} from "./contexts/PostsContext";
import Posts from "./components/Posts";
const App = () => {
  return (
    <PostsContext>
        <View style={{flex : 1}}>
          <User/>
          <Posts/>
        </View>
    </PostsContext>
  )
}

export default App