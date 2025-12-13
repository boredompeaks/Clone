import { BlogPost } from "../types";

export const post: BlogPost = {
  slug: "communication-and-network",
  title: "Communication and Network Technologies",
  date: "November 2022",
  author: "Badar Bawani",
  category: "Computer Science",
  content: `
    <div class="prose dark:prose-invert max-w-none">
      <h2>Chapter 2: Communication and Network Technologies</h2>
      <p><a href="https://drive.google.com/file/d/19hNNJk4LzoHKwsvxR5bPLN_mbpsW6RNh/view?usp=share_link" class="text-blue-600 hover:underline">Click here to open the file in PDF format</a></p>

      <div class="mt-8 space-y-8">
        <section>
          <h3 class="font-bold text-lg">Q1. (a) Explain the term bit streaming.</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Sequence of digital signals / bits by a communication path / Internet</li>
            <li>Transfer of data at high speed</li>
            <li>Requires fast broadband connection</li>
            <li>Requires some form of buffering</li>
            <li>Bits arrive in the same order as sent</li>
          </ul>
        </section>

        <section>
          <h3 class="font-bold text-lg">(b) A person watches a film streamed from a website on a tablet computer.</h3>
          <p class="font-semibold mt-2">(i) Give two benefits of using bit streaming for this purpose.</p>
          <ul class="list-disc pl-5 mt-1">
            <li>No need to wait for a whole file to be downloaded</li>
            <li>No need to store large files on user’s computer</li>
            <li>Allows on demand playback</li>
            <li>No specialist software is required for playback in browser</li>
          </ul>

          <p class="font-semibold mt-4">(ii) State two potential problems of using bit streaming for this purpose.</p>
          <ul class="list-disc pl-5 mt-1">
            <li>Video stops / hangs if very slow Internet / broadband speed low</li>
            <li>Video stops / hangs if inadequate buffering capacity</li>
            <li>Loss of Internet means can’t access films / files</li>
            <li>Viruses can be downloaded from the websites</li>
          </ul>
        </section>

        <section>
          <h3 class="font-bold text-lg">(c) Explain the terms on-demand bit streaming and real-time bit streaming.</h3>
          
          <h4 class="font-bold mt-2">On-demand:</h4>
          <ul class="list-disc pl-5 mt-1">
            <li>Digital video tape, analogue video tape, or digital files are converted to bit streaming format for broadcasting on the net. This is known as encoding.</li>
            <li>Encoded streaming video files are then uploaded to a dedicated server.</li>
            <li>A link for the encoded video is placed on a web site.</li>
            <li>A user clicks on the link to download the encoded streaming video.</li>
            <li>Use can pause, go back, re-watch, fast-forward, etc.</li>
          </ul>

          <h4 class="font-bold mt-4">Real-time:</h4>
          <ul class="list-disc pl-5 mt-1">
            <li>An event is captured live with a video camera.</li>
            <li>The video camera is connected to a computer.</li>
            <li>The video signal is converted to streaming media files (encoded) on the computer.</li>
            <li>The encoded feed is uploaded to a dedicated streaming server.</li>
            <li>The server sends the live images to all users requesting it.</li>
            <li>Cannot be paused, etc.</li>
          </ul>
        </section>

        <section>
          <h3 class="font-bold text-lg">2 (b) Consider the URL: http://cie.org.uk/computerscience.html</h3>
          
          <p class="font-semibold mt-2">(i) Meaning of parts:</p>
          <ul class="list-disc pl-5 mt-1">
            <li><strong>http</strong>: Enables browser to know what protocol is being used to access information in the domain.</li>
            <li><strong>cie.org.uk</strong>: The domain name.</li>
            <li><strong>computerscience.html</strong>: Actual web page / file being viewed.</li>
          </ul>

          <p class="font-semibold mt-4">(ii) URL characters %20 and ?</p>
          <ul class="list-disc pl-5 mt-1">
            <li><strong>%20</strong>: Coding for a space (32 in denary), as spaces are not allowed in URLs.</li>
            <li><strong>?</strong>: Separates the URL from all parameters or variables.</li>
          </ul>
        </section>

        <section>
          <h3 class="font-bold text-lg">3. Copper vs Fibre Optic Cable</h3>
          
          <h4 class="font-bold mt-2">Benefits of Fibre Optic Cable:</h4>
          <ul class="list-disc pl-5 mt-1">
            <li>Greater bandwidth</li>
            <li>Needs less signal boosting (can transmit over longer distances)</li>
            <li>Greater security (difficult to "tap")</li>
            <li>Immune to electromagnetic effects</li>
            <li>Lighter in weight</li>
            <li>Consumes less power</li>
          </ul>

          <h4 class="font-bold mt-4">Benefits of Copper Cable:</h4>
          <ul class="list-disc pl-5 mt-1">
            <li>Less expensive to install</li>
            <li>Easier to install (more flexible)</li>
            <li>Easier to make terminations</li>
            <li>Expertise is more extensive</li>
          </ul>
        </section>

        <section>
          <h3 class="font-bold text-lg">4 (a) Client-Server Model</h3>
          <p class="mt-2 text-gray-700 dark:text-gray-300">
            At least one computer used to "serve". Other computers are referred to as "clients". Server provides services/applications which may be requested by clients.
          </p>
          
          <p class="font-semibold mt-4">Benefits:</p>
          <ul class="list-disc pl-5 mt-1">
            <li>Files and resources are centralized</li>
            <li>Manage security/centralized back-up</li>
            <li>Intranet capability</li>
            <li>Clients can be less powerful machines (cheaper)</li>
          </ul>
        </section>

        <section>
          <h3 class="font-bold text-lg">6. IP Addresses</h3>
          <p class="mt-2"><strong>(a) IP stands for:</strong> Internet Protocol</p>
          
          <p class="font-semibold mt-4">(c) Public vs Private IP differences:</p>
          <ul class="list-disc pl-5 mt-1">
            <li>Public address can be reached across the Internet; Private only internally/LAN.</li>
            <li>NAT is necessary for private IP to access Internet.</li>
            <li>Private is more secure than public.</li>
            <li>Public provided by ISP; Private assigned by router.</li>
            <li>Public must be unique on Internet; Private can be duplicated in other networks.</li>
          </ul>
        </section>
      </div>
    </div>
  `
};
