import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from '../../../env';
import HeaderTransparent from 'components/common/HeaderTransparentWithIcon';
import { goBack } from 'utilities/navigation';

const botAvatar = require('../../assets/photos/img_slide1.png');

const BOT = {
  _id: 2,
  name: 'Mr.Bot',
  avatar: botAvatar,
};

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Tôi là Mr.Bot trợ lý của Khánh',
      createdAt: new Date(),
      user: BOT,
    },
    { _id: 2, text: 'Hi', createdAt: new Date(), user: BOT },
  ]);

  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );
  }, []);

  function sendBotResponse(text) {
    let msg = {
      _id: messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT,
    };
    setMessages(prev => (prev, GiftedChat.append([msg])));
  }

  function handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    sendBotResponse(text);
    console.log('testabc', text);
  }

  const onSend = (messagess = []) => {
    setMessages(prev => GiftedChat.append(prev, messagess));
    let mess = messagess[0].text;
    Dialogflow_V2.requestQuery(
      mess,
      result => handleGoogleResponse(result),
      error => console.log('err send: ', error),
    );
  };
  const onQuickReply = quickReply => {
    setMessages(prev => GiftedChat.append(prev, quickReply));
    let mess = quickReply[0].value;
    Dialogflow_V2.requestQuery(
      mess,
      result => {
        return handleGoogleResponse(result);
      },
      error => console.log('err quick: ', error),
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <HeaderTransparent onPress={goBack} />
      <GiftedChat
        messages={messages}
        onSend={message => onSend(message)}
        onQuickReply={quickReply => onQuickReply(quickReply)}
        user={{ _id: 1 }}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
