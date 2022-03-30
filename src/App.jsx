import { QueryClientProvider, QueryClient } from 'react-query'

import { Characters } from './Components/Characters'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Characters />
    </QueryClientProvider>
  )
}
