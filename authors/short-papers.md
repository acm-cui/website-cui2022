---
label: Short Papers
description: Short Papers at !!conference.short_name!! !!conference.year!! combines the previous tracks of provocation papers, demos, and posters into one new enhanced track.

cta:
  text: Submit your paper
  title: Go to EasyChair to manage your paper submission
  link: /2022/authors/submission/
  
track:
  chairs: short_papers
  dates: short_papers

menus:
  authors:
    title: Short Papers
    alt: Information about submitting to the Short Papers track at !!conference.short_name!! !!conference.year!!
    weight: 1
---

# Short Papers

Short Papers are original and unpublished contributions from a broad range of disciplines, including human-computer interaction, computer science, engineering, speech technology, linguistics, psychology, cognitive sciences, sociology and other cognate disciplines. Short papers should have a point that can be made in a few pages, such as a small, focused contribution, negative results, or an interesting application idea. Short papers are categorised into three groups: 

<ul>
  <li><strong>Provocation Papers</strong> aims to explore controversial, risk-taking or nascent ideas that have the potential to spark debate and discussion at the conference.</li>
  <li><strong>Posters</strong> allow for the presentation, discussion and information exchange of early-stage research in the field of Conversational User Interfaces.</li>
  <li><strong>Demos</strong> are interactive contributions aiming to tackle challenges and show progress in the field of Conversational User Interfaces.</li>
</ul>

<div class="row">
	<div class="col-xl-8 col-lg-7 col-md-6 col-12">
		<h2>Provocation Papers &amp; Posters</h2>
		<p>
      Submissions must be anonymised (approx. 3,000 words excluding references). Suitable LaTeX, Word, and <a href="https://www.overleaf.com/gallery/tagged/acm-official" title="ACM authoring templates on Overleaf">Overleaf templates</a> are available from the <a href="https://www.acm.org/publications/proceedings-template" title="ACM authoring templates">ACM Website</a> (Word users should use “Submission Template”, LaTeX users should use the “manuscript” document class in the Master Article Template). ACM’s CCS concepts and keywords are not required for review but may be required if accepted and published by the ACM.
		</p>

		<p>
      For LaTeX, the following should be used:<br>
      <code>\documentclass[manuscript, review, anonymous]{acmart}</code>
		</p>

		<p>
      Each paper will be peer reviewed by three expert reviewers. Submissions must be made through the <a href="{{ "/authors/submission/" | relative_url }}" title="Go to the {{ site.conference.short_name }} {{ site.conference.year }} submission system">submission system</a>. Accepted papers will be available online and given an oral presentation slot at the conference. At least one author of each accepted paper must register for the conference.
		</p>
    
    <hr>
    
		<h2>Demos</h2>
		<p>
			Submissions must consist of the following components through <a href="{{ "/authors/submission/" | relative_url }}" title="The submission system for {{ site.conference.short_name }} {{ site.conference.year }}">the submission system</a>: a written submission, a video showreel (max 2 mins), and an accessibility and inclusivity statement. 
		</p>
		<p>
			The written submission must adhere to the requirements outlined above and contain the following: 
    </p>
		<ul>
			<li>
        A description of the demonstration (approx. 3,000 words excluding references), including a description of the system; a description of the problem(s) it addresses; discussion regarding its novelty and/or applied context; discussion regarding the technology’s relevance to the CUI community; a description of the planned presentation, with details about how online attendees will interact with the demonstration. NB: CUI 2022 will provide a video streaming platform. Your description of the planned presentation should focus on how you will provide an engaging interactive experience for your audience.
			</li>
		  <li>
        Submissions must be anonymised (approx. 3,000 words excluding references). Suitable LaTeX, Word, and <a href="https://www.overleaf.com/gallery/tagged/acm-official" title="ACM authoring templates on Overleaf">Overleaf templates</a> are available from the <a href="https://www.acm.org/publications/proceedings-template" title="ACM authoring templates">ACM Website</a> (Word users should use “Submission Template”, LaTeX users should use the “manuscript” document class in the Master Article Template). ACM’s CCS concepts and keywords are not required for review but may be required if accepted and published by the ACM.
        <br><br>
        For LaTeX, the following should be used:<br>
      <code>\documentclass[manuscript, review, anonymous]{acmart}</code>
      </li>
		</ul>

    <p>
      Alongside the written submission, you must submit a video showreel for your demo and an accessibility and inclusivity statement:
    </p>
		<ul>
			<li>
        Video showreels must be no more than 2 minutes long. The video should showcase how the demonstration will be delivered for online delegates and should highlight: the technology, its potential uses, how it will be demonstrated, and efforts made to increase engagement and interactivity.				</li>
			<li>
				Accessibility and inclusivity statement describing how the presentation adheres to accessibility and inclusivity requirements stipulated on the submission guidance page.
			</li>
		</ul>

		<p>
			Your total submission must not exceed a maximum of 100mb in size.
		</p>

		<h3>Curated selection process</h3>
		<p>
      All submissions will be reviewed by at least one chair and one external reviewer. In curating the program creativity in delivery, feasibility, novelty, and ability to engage online attendees will be assessed. Our aim is to deliver an array of captivating demonstrations that showcase the diverse research arenas contributing to the conversational user interface research community. Sensitive, private and/or proprietary information should not be disclosed prior to publication. Business exposure is reserved for event sponsors only, so advertising materials should not be used in demonstrations.
		</p>

		<h3>Accepted submissions</h3>
		<p>
			Authors be given the opportunity to present their demo during a dedicated demo session. At least one author of each accepted demo must register for the conference. Authors of accepted submissions will be given instructions for preparing camera-ready versions, along with scheduling information.
		</p>

		<h2>Any questions?</h2>
		<p>
			Please contact the <a href="{{ site.data.oc['tracks']['roles'][page.track.chairs]['email'] }}" title="Contact the {{ site.conference.short_name }} {{ site.conference.year }} {{ site.data.oc['tracks']['roles'][page.track.chairs]['label'] }} if you have any questions">{{ site.data.oc['tracks']['roles'][page.track.chairs]['label'] }}</a> if you have any questions.
		</p>
	</div>

	<div class="col-xl-4 col-lg-5 col-md-6 col-12">
		<h2>Important dates</h2>
		<p>
			{% for date in site.data.track_dates[page.track.dates] %}
			{{ date.label }}: {% if date.extended_date %}<strike>{{ date.date }}</strike> <strong>{{ date.extended_date }}</strong>{% else %}<strong>{{ date.date }}</strong>{% endif %}<br>
			{% endfor %}
		</p>
		<p>
			<em class="small">All deadlines are at 23:59 Anywhere on Earth</em>
		</p>
	</div>
</div>
