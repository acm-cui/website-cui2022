---
label: Demos
description: The Demos track at !!conference.short_name!! !!conference.year!! allows authors to present interactive contributions aiming to tackle challenges and show progress in the field of Conversational User Interfaces. 

#cta:
#  text: Submissions closed
#  title: Go to EasyChair to manage your paper submission
#  link: /2021/authors/submission/
  
track:
  chairs: demos
  dates: posters

menus:
  authors:
    title: Demos
    alt: Information about submitting to the Demos track at !!conference.short_name!! !!conference.year!!
    weight: 3
---

# Demos

Demos are interactive contributions aiming to tackle challenges and show progress in the field of Conversational User Interfaces. Authors should submit a Demo Paper detailing their demo.

<div class="row">
	<div class="col-xl-8 col-lg-7 col-md-6 col-12">
		<h2>Track information</h2>
		<p>
			Submissions must be anonymised (<strong>approx. 3,000 words excluding references</strong>) using the <a href="https://www.acm.org/publications/taps/word-template-workflow#h-2.-the-workflow-and-templates" title="ACM template information">ACM author templates</a> (Word users should use the <em>Submission Template</em>, LaTeX users should use the "manuscript" document class in the <em>Master Article Template</em>).
		</p>
		<p>
			Each submission will be reviewed by one track chair and one expert reviewer. Following a curated selection process, successful submissions will be invited to present at {{ site.conference.short_name }} {{ site.conference.year }}. Submissions must be made through the conference Easychair submission system.  Please see the <a href="{{ "/authors/submission-guidance/" | relative_url }}" title="Additional submission guidance for {{ site.conference.short_name }} {{ site.conference.year }}">submission guidance page</a> for information on the changes made to the conference from previous years, the submission process, making your submission accessible, and the various rules and policies that you must agree to when making your submission.
		</p>
		<p>
			Accepted Demo Papers will be archived in the <a href="http://dl.acm.org/" title="The ACM Digital Library">ACM Digital Library</a> and authors be given the opportunity to present their demo during a dedicated demo session. At least one author of each accepted demo must register for the conference.
		</p>
		<h2>Submissions</h2>
		<p>
			Submissions must consist of the following components through <a href="{{ "/authors/submission/" | relative_url }}" title="The submission system for {{ site.conference.short_name }} {{ site.conference.year }}">the submission system</a>: a written submission, a video showreel (max 2 mins), and an accessibility and inclusivity statement. 
		</p>
		<p>
			The written submission must adhere to the requirements outlined above and contain the following: 
			<ul>
				<li>
					A description of the demonstration (approx. 3,000 words excluding references), including: a description of the system; a description of the problem(s) it addresses;  discussion regarding its novelty and/or applied context; discussion regarding the technology’s relevance to the {{ site.conference.short_name }} community; a description of the planned presentation, with details about how online attendees will interact with the demonstration. NB: {{ site.conference.short_name }} {{ site.conference.year }} will provide a video streaming platform. Your description of the planned presentation should focus on how you will provide an engaging interactive experience for your audience.
				</li>
			</ul>
		Alongside the written submission, you must submit a video showreel for your demo and an accessibility and inclusivity statement:
			<ul>
				<li>
					Video showreels must be no more than 2 minutes long. The video should showcase how the demonstration will be delivered for online delegates, and should highlight: the technology, its potential uses, how it will be demonstrated, and efforts made to increase engagement and interactivity.
				</li>
				<li>
					Accessibility and inclusivity statement describing how the presentation adheres to accessibility and inclusivity requirements stipulated on the submission guidance page.
				</li>
			</ul>
		</p>
		<p>
			Your total submission must not exceed a maximum of 100mb in size.
		</p>
		<h2>Curated selection process</h2>
		<p>
			All submissions will be reviewed by at least one chair and one external reviewer.  In curating the program creativity in delivery, feasibility, novelty, and ability to engage online attendees will be assessed. Our aim is to deliver an array of captivating demonstrations that showcase the diverse research arenas contributing to the conversational user interface research community. Sensitive, private and/or proprietary information should not be disclosed prior to publication. Business exposure is reserved for event sponsors only, so advertising materials should not be used in demonstrations. 
		</p>
		<h2>Accepted submissions</h2>
		<p>
			Authors of accepted submissions will be given instructions for preparing camera-ready versions, along with scheduling information.
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
