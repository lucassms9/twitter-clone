import { Post } from '@services/client/types';

export interface Props {
  quotePost?: Post;
  isVisible: boolean;
  onPress: () => void;
}
