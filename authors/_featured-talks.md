---
label: Featured Talks
description: The Featured Talks track at !!conference.short_name!! !!conference.year!! looks to showcase work from 2011--2020 related to all aspects of Conversational User Interfaces.

#cta:
#  text: Submissions closed
#  title: Send an email to the Featured Talks Chairs
#  link: https://spamty.eu/show/v6/438/2bc5bcd3e27587af8f7fc532/
  
track:
  chairs: featured_talks
  dates: featured_talks

menus:
  authors:
    title: Featured Talks
    alt: Information about submitting to the Featured Talks track at !!conference.short_name!! !!conference.year!!
    weight: 4
---

# Featured Talks

The Featured Talks track looks to showcase work from 2011--2020 related to all aspects of Conversational User Interfaces. These will be works from leading journals and conferences published over the last 10 years. 

<div class="row">
	<div class="col-xl-8 col-lg-7 col-md-6 col-12">
		<h2>Track information</h2>
		<p>
			You should submit a copy of the paper you wish to present at {{ site.conference.short_name }} {{ site.conference.year }} as a PDF, along with a link to the paper in the publisher's repository.
		</p>
		<p>
			 The track is <strong>curated</strong> and all submissions will be assessed by the track chairs. Accepted submissions will be given an oral presentation slot at the conference.
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