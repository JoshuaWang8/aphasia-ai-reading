import React, { useEffect, useState } from 'react';
import './App.css';
import FileUploader from './components/FileUploader';
import { FileUploadOutput } from './components/FileUploadOutput';
import { LoadingScreen } from './components/LoadingScreen';
import Logo from './assets/apha-ai-logo.png';
import Dictaphone from './components/VoiceToText';

function App() {
    const [blobVisible, setBlobVisible] = useState(false);
    const [fileResults, setFileResults] = useState([]);
    const [filename, setFilename] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(loadingTimeout);
    }, []);

    const handleProcessingComplete = (filename, results) =>
    {
        setFileResults(results);
        setFilename(filename);
        setBlobVisible(results.length !== 0 ? true : false);
    }

    return (
        <div className="App">
            {isLoading ? (
                <div className='LoadingScreen'>
                    <LoadingScreen />
                </div>
            ) : (
                <header className="App-header">
                    <img src={Logo} alt="Logo" className="App-logo" width='400' style={{ padding: '40px' }} />
                    <FileUploader onProcessingComplete={handleProcessingComplete} />
                    <FileUploadOutput filename={filename} results={fileResults} isVisible={blobVisible} />
                    <Dictaphone/>
                </header>
            )}
        </div>
    );
}

export default App;
