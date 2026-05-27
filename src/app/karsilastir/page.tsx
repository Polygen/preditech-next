// @ts-nocheck
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window['init' + 'karsilastirjs']) {
      window['init' + 'karsilastirjs']();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<!-- NAVBAR -->


<div class="page-header" style="padding-top:120px;padding-bottom:40px">
<div class="particles"></div>
<div class="container">
<h1 style="font-size:clamp(32px,4vw,48px)">Hangi Preditech<br><span>Size G�re?</span></h1>
</div>
</div>

<section class="section" style="padding-top:0">
<div class="container" style="overflow-x:auto">
<table class="compare-table">
<thead>
<tr>
<th style="width:25%">�zellik</th>
<th style="width:25%;text-align:center">GO<br><span style="font-size:13px;font-weight:400;color:var(--text2)">950?</span></th>
<th style="width:25%;text-align:center;color:var(--accent)">PRO<br><span style="font-size:13px;font-weight:400;color:var(--text2)">2.500?</span></th>
<th style="width:25%;text-align:center">GT<br><span style="font-size:13px;font-weight:400;color:var(--text2)">9.800?</span></th>
</tr>
</thead>
<tbody>
<tr><td>Hedef Kitle</td><td style="text-align:center">G�nl�k S�r�c�</td><td style="text-align:center" class="highlight">Gelece�i G�renler</td><td style="text-align:center">Pist Tutkunlar�</td></tr>
<tr><td>OBD-II Veri Okuma</td><td style="text-align:center">?</td><td style="text-align:center" class="highlight">?</td><td style="text-align:center">?</td></tr>
<tr><td>Hata Kodu (DTC) Silme</td><td style="text-align:center">?</td><td style="text-align:center" class="highlight">?</td><td style="text-align:center">?</td></tr>
<tr><td>6-Eksen IMU Sens�r�</td><td style="text-align:center">�</td><td style="text-align:center" class="highlight">100Hz</td><td style="text-align:center">100Hz</td></tr>
<tr><td>Kestirimci Bak�m AI</td><td style="text-align:center">�</td><td style="text-align:center" class="highlight">? (30 g�n �nceden)</td><td style="text-align:center">?</td></tr>
<tr><td>S�r�� Skoru</td><td style="text-align:center">Temel</td><td style="text-align:center" class="highlight">Geli�mi� G-Kuvveti ile</td><td style="text-align:center">Geli�mi�</td></tr>
<tr><td>Predicto AI Chatbot</td><td style="text-align:center">�</td><td style="text-align:center" class="highlight">?</td><td style="text-align:center">?</td></tr>
<tr><td>100Hz Dahili GPS</td><td style="text-align:center">�</td><td style="text-align:center" class="highlight">�</td><td style="text-align:center">U-Blox M10</td></tr>
<tr><td>0-100 & Pist Telemetrisi</td><td style="text-align:center">�</td><td style="text-align:center" class="highlight">�</td><td style="text-align:center">?</td></tr>
<tr><td></td>
<td style="text-align:center"><a href="/go" class="btn btn-ghost" style="padding:6px 12px;font-size:12px">�ncele</a></td>
<td style="text-align:center"><a href="/pro" class="btn btn-primary" style="padding:6px 12px;font-size:12px">�ncele</a></td>
<td style="text-align:center"><a href="/gt" class="btn btn-ghost" style="padding:6px 12px;font-size:12px">�ncele</a></td>
</tr>
</tbody>
</table>
</div>
</section>

<!-- FOOTER -->
<!-- FOOTER -->



` }} />
      
      <Script src="/js/karsilastir.js" strategy="lazyOnload" onLoad={() => { if(window['init' + 'karsilastirjs']) window['init' + 'karsilastirjs'](); }} />
    </>
  );
}
