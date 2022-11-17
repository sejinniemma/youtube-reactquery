import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { YoutubeProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeProvider>
    </>
  );
}

export default App;
