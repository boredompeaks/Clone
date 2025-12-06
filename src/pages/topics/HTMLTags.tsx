import React from 'react';

export default function HTMLTags() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">HTML Tags</h1>
      <ul className="list-disc pl-5">
        <li>&lt;h1&gt; to &lt;h6&gt;: Headings</li>
        <li>&lt;p&gt;: Paragraph</li>
        <li>&lt;a&gt;: Link</li>
        <li>&lt;img&gt;: Image</li>
      </ul>
    </div>
  );
}
