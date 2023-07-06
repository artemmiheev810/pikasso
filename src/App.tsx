import React from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Main from './pages/Main/Main';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Post from "./pages/Post/Post";

export const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'}  element={<Main/>}/>
                    <Route path={'post/:id'} element={<Post/>}/>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>

    );
}

export default App;
