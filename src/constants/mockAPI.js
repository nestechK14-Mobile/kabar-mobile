import { PNG_BBC_News,PNG_Europe,PNG_NewAPI1,PNG_NewAPI2,PNG_Sport } from '@/assets';
import uuid from 'react-native-uuid';
export const mockAPI = [
    {
      id: uuid.v4(),
      image: PNG_Europe,
      category: 'Europe',
      source: "BBC News",
      sourceLogo: PNG_BBC_News,
      time: '15m ago',
      content: "Ukraine's President Zelensky to BBC: Blood money being paid..."
    },
    {
      id: uuid.v4(),
      image: PNG_Sport,
      category: 'Sport',
      source: "BBC News",
      sourceLogo: PNG_BBC_News,
      time: '2h ago',
      content: "Frankfurt stun Barcelona to reach semi-finals"
    },
    {
      id: uuid.v4(),
      image: PNG_NewAPI1,
      category: 'API1',
      source: "BBC News",
      sourceLogo: PNG_BBC_News,
      time: '1 day ago',
      content: "Russian warship: Moskva sinks in Black Sea"
    },
    {
      id: uuid.v4(),
      image: PNG_NewAPI2,
      category: 'API1',
      source: "BBC News",
      sourceLogo: PNG_BBC_News,
      time: '4 days ago',
      content: "Madhya Pradesh: Why an Indian state is demolishing Muslim..."
    },
  ]