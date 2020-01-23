import * as React from 'react';
import { FlatList, NativeSyntheticEvent, NativeScrollEvent, FlatListProps, ListRenderItem } from 'react-native';

export interface BetterScrollViewProps extends Omit<FlatListProps<any>, 'renderItem'|'data'> {
  data?: (JSX.Element | React.ReactNode)[];
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  scrollViewRef?: React.LegacyRef<FlatList<any>>
  listKey?: string;
}

declare const BetterScrollView: React.FC<BetterScrollViewProps>;

declare module "better-scroll-view" { }

export default BetterScrollView;
