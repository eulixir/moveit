import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="Container404">
      <div>Opa meu mano, esta indo para aonde?</div>
      <button onClick={() => router.push('/')}>Home</button>
    </div>
  );
}
