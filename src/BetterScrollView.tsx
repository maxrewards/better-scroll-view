import * as React from 'react';
import { FlatList } from 'react-native';
import { BetterScrollViewProps } from '../index';

const renderer = ({ item }) => item;

const BetterScrollView: React.FC<BetterScrollViewProps> = ({ data, onScroll, scrollViewRef, listKey, ...props }) => {
  if (props.children && Array.isArray(props.children) && !data) data = [...props.children];
  else if (props.children && !Array.isArray(props.children) && !data) data = [props.children];
  return (
    <FlatList
      ref={scrollViewRef}
      data={data}
      renderItem={renderer}
      onScroll={onScroll}
      scrollEventThrottle={onScroll && 16}
      showsVerticalScrollIndicator={false}
      listKey={listKey}
      keyExtractor={(item, index) => index.toString()}
      {...props} />
  );
}

export default BetterScrollView;
