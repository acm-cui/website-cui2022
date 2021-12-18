---
label: Industry Panel
description: The !!conference.short_name!! Industry Panel is back, with a fantastic lineup of panelists.

cta:
  text: View in programme
  title: Locate the panel in the conference programme
  link: /2021/programme/link/industry

menus:
  programme:
    title: Industry Panel
    alt: Details about the !!conference.short_name_!! !!conference.year!! conference industry panel
    weight: 2
---

# Industry Panel

{{ site.conference.short_name }} {{ site.conference.year }} marks the return of the <strong>Industry Panel</strong>. This year, we have a fantastic lineup of panellists from around the world, who will each give a short talk on <em>The Future of Conversational User Interfaces</em>, followed by a roundtable discussion.

{% for panelist in site.data.prg_industry %}
<div class="modal fade" id="profile-bio-{{ forloop.index }}" tabindex="{{ forloop.index }}" aria-labelledby="profile-{{ forloop.index }}" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="profile-bio-header-{{ forloop.index }}">{{ panelist.name }}, {{ panelist.from }}</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<img src="{{ panelist.image | relative_url }}" alt="A photograph of {{ panelist.name }}" title="{{ panelist.name }}" class="rounded ml-2 float-right" style="width: 200px;">
				<p>
					{{ panelist.biography }}
					</p>
				{% if panelist.website %}
				<a href="{{ panelist.website }}" title="Go to {{ panelist.name }}'s website" class="card-link">{{ panelist.name }}'s website &rarr;</a>
				{% endif %}
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
</div>
{% endfor %}

<div class="d-flex flex-row flex-wrap justify-content-center">

{% for panelist in site.data.prg_industry %}
<div class="profile col-xl-4 col-lg-4 col-lg-6 col-md-6 col-12">
	<div class="m-1 mb-4 border rounded" data-toggle="modal" data-target="#profile-bio-{{ forloop.index }}" id="profile-{{ forloop.index }}">
		<img src="{{ panelist.image | relative_url }}" alt="A photograph of {{ panelist.name }}" title="{{ panelist.name }}" class="card-img-top">
		<div class="card-body">
			<h5 class="card-title m-0">
				{{ panelist.name }}<br>
                <small>{{ panelist.from }}</small>
			</h5>
		</div>
	</div>
</div>
{% endfor %}

</div>
