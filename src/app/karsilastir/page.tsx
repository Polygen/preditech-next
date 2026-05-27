// @ts-nocheck
'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  return (
    <>


<div className="page-header" style={{ paddingTop: '120px', paddingBottom: '40px',  }}>
<div className="particles"></div>
<div className="container">
<h1 style={{ fontSize: 'clamp(32px,4vw,48px)',  }}>Hangi Preditech<br /><span>Size G�re?</span></h1>
</div>
</div>

<section className="section" style={{ paddingTop: '0',  }}>
<div className="container" style={{ overflowX: 'auto',  }}>
<table className="compare-table">
<thead>
<tr>
<th style={{ width: '25%',  }}>�zellik</th>
<th style={{ width: '25%', textAlign: 'center',  }}>GO<br /><span style={{ fontSize: '13px', fontWeight: '400', color: 'var(--text2)',  }}>950?</span></th>
<th style={{ width: '25%', textAlign: 'center', color: 'var(--accent)',  }}>PRO<br /><span style={{ fontSize: '13px', fontWeight: '400', color: 'var(--text2)',  }}>2.500?</span></th>
<th style={{ width: '25%', textAlign: 'center',  }}>GT<br /><span style={{ fontSize: '13px', fontWeight: '400', color: 'var(--text2)',  }}>9.800?</span></th>
</tr>
</thead>
<tbody>
<tr><td>Hedef Kitle</td><td style={{ textAlign: 'center',  }}>G�nl�k S�r�c�</td><td style={{ textAlign: 'center',  }} className="highlight">Gelece�i G�renler</td><td style={{ textAlign: 'center',  }}>Pist Tutkunlar�</td></tr>
<tr><td>OBD-II Veri Okuma</td><td style={{ textAlign: 'center',  }}>?</td><td style={{ textAlign: 'center',  }} className="highlight">?</td><td style={{ textAlign: 'center',  }}>?</td></tr>
<tr><td>Hata Kodu (DTC) Silme</td><td style={{ textAlign: 'center',  }}>?</td><td style={{ textAlign: 'center',  }} className="highlight">?</td><td style={{ textAlign: 'center',  }}>?</td></tr>
<tr><td>6-Eksen IMU Sens�r�</td><td style={{ textAlign: 'center',  }}>�</td><td style={{ textAlign: 'center',  }} className="highlight">100Hz</td><td style={{ textAlign: 'center',  }}>100Hz</td></tr>
<tr><td>Kestirimci Bak�m AI</td><td style={{ textAlign: 'center',  }}>�</td><td style={{ textAlign: 'center',  }} className="highlight">? (30 g�n �nceden)</td><td style={{ textAlign: 'center',  }}>?</td></tr>
<tr><td>S�r�� Skoru</td><td style={{ textAlign: 'center',  }}>Temel</td><td style={{ textAlign: 'center',  }} className="highlight">Geli�mi� G-Kuvveti ile</td><td style={{ textAlign: 'center',  }}>Geli�mi�</td></tr>
<tr><td>Predicto AI Chatbot</td><td style={{ textAlign: 'center',  }}>�</td><td style={{ textAlign: 'center',  }} className="highlight">?</td><td style={{ textAlign: 'center',  }}>?</td></tr>
<tr><td>100Hz Dahili GPS</td><td style={{ textAlign: 'center',  }}>�</td><td style={{ textAlign: 'center',  }} className="highlight">�</td><td style={{ textAlign: 'center',  }}>U-Blox M10</td></tr>
<tr><td>0-100 & Pist Telemetrisi</td><td style={{ textAlign: 'center',  }}>�</td><td style={{ textAlign: 'center',  }} className="highlight">�</td><td style={{ textAlign: 'center',  }}>?</td></tr>
<tr><td></td>
<td style={{ textAlign: 'center',  }}><Link href="/go" className="btn btn-ghost" style={{ padding: '6px 12px', fontSize: '12px',  }}>�ncele</Link></td>
<td style={{ textAlign: 'center',  }}><Link href="/pro" className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '12px',  }}>�ncele</Link></td>
<td style={{ textAlign: 'center',  }}><Link href="/gt" className="btn btn-ghost" style={{ padding: '6px 12px', fontSize: '12px',  }}>�ncele</Link></td>
</tr>
</tbody>
</table>
</div>
</section>




    </>
  );
}
