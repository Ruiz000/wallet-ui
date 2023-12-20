import './Card.css';
import { useAccount,useBalance } from 'wagmi';

export default function Card() {
    const { address, isConnecting, isDisconnected } = useAccount()
    const { data, isLoading, isError} = useBalance({
        address
    })
 
    if (isConnecting) return <div>Connecting…</div>
    if (isDisconnected) return <div>Disconnected</div>

    return (
        <>
        {isLoading && <div>Fetching balance…</div>}
        {isError && <div>Error fetching balance</div>}
        <div id="card">
            
            <div id="info">
                Balance: {data?.formatted} {data?.symbol} {data?.formatted === '0' ? '🤣' : '🤪'}
            </div>
        </div>
        </>
    )
}