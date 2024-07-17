import './App.css';
import Modal from 'react-modal';

const MyModal: React.FC<{
    isOpen: boolean,
    closeModal: Function,
    heading: string,
    description: string,
    button?: string,
}> = function({
    isOpen,
    closeModal,
    heading,
    description,
    button,
}) {
  
    return (
    <Modal
        isOpen={isOpen}
        // @ts-ignore
        onRequestClose={closeModal}
        style={{
            content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#282c34',
            border: '3px solid lightgreen',
            color: 'lightgreen',
            borderRadius: '10%',
            display: 'flex',
            maxWidth: 300,
            flexDirection: 'column',
            },
            overlay: {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            }
        }}>
            {/** Close button */}
            <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 10,
            }}>
                <strong style={{
                    fontSize: 26,
                }}>{heading}</strong>
                {/* @ts-ignore */}
                <svg onClick={closeModal} style={{ cursor: 'pointer' }} fill='lightgreen' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
            </div>
            <span style={{ textAlign: 'justify' }}>{description}</span>
            {button && <button
                style={{
                    marginTop: 20,
                    padding: 10,
                    backgroundColor: '#4e5565',
                    color: 'lightgreen',
                    cursor: 'pointer',    
                }}
                /* @ts-ignore */
                onClick={closeModal}
            >{button}</button>}
    </Modal>
  );
}

export default MyModal;
