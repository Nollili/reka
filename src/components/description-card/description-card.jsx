import React from 'react';

export default function Card({ title, paragraph1, paragraph2, paragraph3 }) {
	return (
    <div className='tc br4 pa3 ma4 dib bw1 shadow-4'>
      <article className="pa3 pa5-ns">
			<h1 className="f3 f2-m f2-l">{title}</h1>
			<p className="1h-copy">{paragraph1}</p>
			<p className="lh-copy">{paragraph2}</p>
			<p className="lh-copy">{paragraph3}</p>

			<div className="">
				<button className="grow f6 link dim ba bw2 ph3 pv2 mb2 dib mid-gray">Erdekel</button>
			</div>
		</article>
    </div>
		
	);
}
