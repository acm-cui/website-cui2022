---
label: Posters
description: The Posters track at !!conference.short_name!! !!conference.year!! allows for the presentation, discussion and information exchange of early stage research in the field of Conversational User Interfaces.

#cta:
#  text: Submissions closed
#  title: Go to EasyChair to manage your paper submission
#  link: /2021/authors/submission/
  
track:
  chairs: posters
  dates: posters

menus:
  authors:
    title: Posters
    alt: Information about submitting to the Posters track at !!conference.short_name!! !!conference.year!!
    weight: 2
---

# Posters

Posters allow for the presentation, discussion and information exchange of early stage research in the field of Conversational User Interfaces. Authors should submit a Poster Paper outlining their reearch.

<div class="row">
	<div class="col-xl-8 col-lg-7 col-md-6 col-12">
		<h2>Track information</h2>
		<p>
			Submissions must be anonymised (<strong>approx. 3,000 words excluding references</strong>) using the <a href="https://www.acm.org/publications/taps/word-template-workflow#h-2.-the-workflow-and-templates" title="ACM template information">ACM author templates</a> (Word users should use the <em>Submission Template</em>, LaTeX users should use the "manuscript" document class in the <em>Master Article Template</em>).
		</p>
		<p>
			Each submission will be peer reviewed by 3 expert reviewers. Submissions must be made through the conference submission system. Please see the <a href="{{ "/authors/submission-guidance/" | relative_url }}" title="Additional submission guidance for {{ site.conference.short_name }} {{ site.conference.year }}">submission guidance page</a> for information on the changes made to the conference from previous years, the submission process, making your submission accessible, and the various rules and policies that you must agree to when making your submission.
		</p>
		<p>
			Accepted Poster Papers will be archived in the <a href="http://dl.acm.org/" title="The ACM Digital Library">ACM Digital Library</a> and authors will be invited to create a (static) webpage for their poster as part of the presentation for their work. This webpage will be hosted and accessible from the {{ site.conference.short_name }} {{ site.conference.year }} website. We will explore ways to integrate posters into the wider {{ site.conference.short_name }} {{ site.conference.year }} programme too. At least one author of each accepted poster must register for the conference.
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
