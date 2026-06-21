import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Sapiens AeroComp carbon fiber UAV propellers and composite manufacturing';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background:
            'radial-gradient(circle at 82% 18%, rgba(245, 158, 11, 0.3), transparent 28%), linear-gradient(135deg, #003049 0%, #064d62 58%, #14939c 100%)',
          color: 'white',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          padding: '72px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1020 }}>
          <div
            style={{
              color: '#8de0df',
              display: 'flex',
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 5,
              textTransform: 'uppercase',
            }}
          >
            Sapiens AeroComp
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.08,
              marginTop: 28,
            }}
          >
            Carbon Fiber Propulsion for UAV & Air Mobility
          </div>
          <div
            style={{
              color: '#e7f4f2',
              display: 'flex',
              fontSize: 30,
              lineHeight: 1.35,
              marginTop: 30,
            }}
          >
            Indigenous CFRP propellers, custom development, and composite manufacturing in Pune, India.
          </div>
        </div>
      </div>
    ),
    size
  );
}
